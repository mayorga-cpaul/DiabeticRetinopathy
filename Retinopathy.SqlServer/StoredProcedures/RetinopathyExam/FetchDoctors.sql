CREATE PROCEDURE [dbo].[FetchDoctors]
   @RoleName NVARCHAR(64)
AS BEGIN
	SELECT U.* FROM [dbo].[User] AS U 
	INNER JOIN [dbo].[RoleUser] AS RS 
	ON RS.UserId = U.UserId
	INNER JOIN [dbo].[Role] as R
	ON R.RoleId = RS.RoleId
	WHERE R.[Name] = @RoleName
END