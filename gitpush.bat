@ECHO OFF

SET CurrentDirectory=%~dp0

FOR %%a IN ("%CurrentDirectory:~0,-1%") DO SET ParentCurrentDirectory=%%~dpa

set DeploymentFilesDirectory=%CurrentDirectory%build\wwwroot

set GitHubIoDirectory=%ParentCurrentDirectory%altandenter.github.io

dotnet publish --configuration Release --output build

robocopy "%DeploymentFilesDirectory%" "%GitHubIoDirectory%" /e /xf "%DeploymentFilesDirectory%"\index.html

cd %GitHubIoDirectory%

git add .

For /f "tokens=2-4 delims=/ " %%a in ('date /t') do (SET date=%%c-%%a-%%b)
For /f "tokens=1-2 delims=/:" %%a in ("%TIME%") do (SET time=%%a%%b)

git commit -m "commit-%date%-%time%"

git push

cd %CurrentDirectory%

exit /b