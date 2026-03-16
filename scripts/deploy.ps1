$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$distPath = Join-Path $root 'portfolio\dist'

if (-not (Test-Path $distPath)) {
    throw "Build output not found at $distPath. Run npm run build first."
}

$remoteUrl = git -C $root remote get-url origin
if (-not $remoteUrl) {
    throw 'Could not read origin remote URL.'
}

$tempDir = Join-Path $env:TEMP ("gh-pages-" + [Guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Path $tempDir | Out-Null

try {
    Copy-Item -Path (Join-Path $distPath '*') -Destination $tempDir -Recurse -Force

    git -C $tempDir init | Out-Null
    git -C $tempDir checkout -b gh-pages | Out-Null
    git -C $tempDir add -A
    git -C $tempDir commit -m 'Deploy GitHub Pages' | Out-Null
    git -C $tempDir remote add origin $remoteUrl
    git -C $tempDir push -f origin gh-pages
}
finally {
    if (Test-Path $tempDir) {
        Remove-Item -Path $tempDir -Recurse -Force
    }
}
