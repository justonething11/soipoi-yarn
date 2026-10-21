@echo off
setlocal

rem ============================================================
rem  SOIPOI Catalog PDF generator
rem  Double-click this file to regenerate SOIPOI-Catalog.pdf
rem  from catalog.html in the same folder.
rem  Requires Microsoft Edge. Google Fonts need internet.
rem ============================================================

set "DIR=%~dp0"
set "INPUT=%DIR%catalog.html"
set "OUTPUT=%DIR%SOIPOI-Catalog.pdf"

set "EDGE="
if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" set "EDGE=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"
if not defined EDGE if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" set "EDGE=%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"
if not defined EDGE if exist "%LOCALAPPDATA%\Microsoft\Edge\Application\msedge.exe" set "EDGE=%LOCALAPPDATA%\Microsoft\Edge\Application\msedge.exe"

if not defined EDGE (
    echo [ERROR] Microsoft Edge was not found.
    echo Install Edge, or edit this script to point to Chrome.
    pause
    exit /b 1
)

if not exist "%INPUT%" (
    echo [ERROR] catalog.html not found next to this script:
    echo   %INPUT%
    pause
    exit /b 1
)

rem Convert Windows path to a file:// URL (backslash to slash)
set "INPUT_URL=%INPUT:\=/%"

echo Generating: %OUTPUT%
echo.
"%EDGE%" --headless --disable-gpu --no-pdf-header-footer --virtual-time-budget=4000 --print-to-pdf="%OUTPUT%" "file:///%INPUT_URL%"

echo.
if exist "%OUTPUT%" (
    echo [OK] Done. File: %OUTPUT%
) else (
    echo [ERROR] PDF was not generated.
)
echo.
pause
