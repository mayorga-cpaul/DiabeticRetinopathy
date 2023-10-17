CREATE PROCEDURE [dbo].[FetchUsers]
AS BEGIN
  SELECT  
    U.UserId, U.Cedula, U.CreatedDate, U.Email, U.Phone,
    R.[RoleId], R.[Name] FROM [dbo].[User] AS U 
  INNER JOIN [dbo].[RoleUser] AS RS 
  ON RS.UserId = U.UserId
  INNER JOIN [dbo].[Role] as R
  ON R.RoleId = RS.RoleId
END