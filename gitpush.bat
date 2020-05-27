@echo off

For /f "tokens=2-4 delims=/ " %%a in ('date /t') do (SET gitpushdate=%%c-%%a-%%b)
For /f "tokens=1-2 delims=/:" %%a in ("%TIME%") do (SET gitpushtime=%%a%%b)

SET origindirectory=%~dp0

FOR %%a IN ("%origindirectory:~0,-1%") DO SET parentorigindirectory=%%~dpa

set source=%origindirectory%build\wwwroot

set destination=%parentorigindirectory%altandenter.github.io

dotnet publish --configuration Release --output build

robocopy "%source%" "%destination%" /e /xf "%source%"\index.html

cd %destination%

git add .

git commit -m "commit-%gitpushdate%-%gitpushtime%"

git push

cd %origindirectory%

exit /b

C:\_Data\Blazor\AltAndEnter\build\wwwroot