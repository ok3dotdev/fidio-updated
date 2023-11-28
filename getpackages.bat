@echo off
setlocal enabledelayedexpansion

set "PACKAGE_JSON_PATH=./package.json"

set "result=<*T&*>"

for /f %%i in ('powershell -command "(Get-Content '%PACKAGE_JSON_PATH%' | ConvertFrom-Json).dependencies | ForEach-Object { $_.Keys }"') do (
  set "result=!result!%%i<*T&*>"
)

echo %result%

endlocal