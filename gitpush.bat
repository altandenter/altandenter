ECHO OFF

SET currentdirectory=%~dp0

FOR %%a IN ("%currentdirectory:~0,-1%") DO SET parentcurrentdirectory=%%~dpa

set source=%currentdirectory%build\wwwroot

set destination=%parentcurrentdirectory%altandenter.github.io

dotnet publish --configuration Release --output build

robocopy "%source%" "%destination%" /e /xf "%source%"\index.html

cd %destination%

git add .

For /f "tokens=2-4 delims=/ " %%a in ('date /t') do (SET date=%%c-%%a-%%b)
For /f "tokens=1-2 delims=/:" %%a in ("%TIME%") do (SET time=%%a%%b)

git commit -m "commit-%date%-%time%"

git push

cd %currentdirectory%

exit /b