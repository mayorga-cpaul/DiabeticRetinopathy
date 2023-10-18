CREATE PROCEDURE [dbo].[FetchRoleByUserId]
	@UserId BIGINT
AS
	SELECT R.* FROM [dbo].[Role] AS R INNER JOIN [dbo].[RoleUser] AS RU
	ON RU.RoleId = R.RoleId WHERE RU.UserId = @UserId
