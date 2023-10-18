CREATE PROCEDURE [dbo].[InsertUser]
    @UserId BIGINT OUTPUT,
    @UserName NVARCHAR(64),
    @Email NVARCHAR(64),
    @Password NVARCHAR(MAX),
    @Cedula NVARCHAR(64),
    @Phone NVARCHAR(64),
    @Roles [dbo].[AssignRequestType] READONLY,
    @UserClaims [dbo].[ClaimRequestType] READONLY
AS BEGIN
    SET NOCOUNT ON;
    BEGIN TRANSACTION;

    -- Inserta el nuevo usuario en la tabla User
    INSERT INTO [dbo].[User] ([UserName], [Email], [Password], [Phone], [Cedula])
    VALUES (@UserName, @Email, @Password, @Phone, @Cedula);

    -- Obtiene el ID del nuevo usuario insertado
    SET @UserId = SCOPE_IDENTITY();

    -- Inserta los roles asociados al usuario en la tabla "RoleUser"
    INSERT INTO [dbo].[RoleUser] ([UserId], [RoleId])
    SELECT @UserId, R.RoleId 
    FROM [Role] AS R
    WHERE R.[Name] IN (SELECT RS.[RoleName] FROM @Roles AS RS);

    -- Inserta los claims del usuario en la tabla "UserClaim"
    INSERT INTO [dbo].[UserClaim] ([UserId], [ClaimType], [ClaimValue])
    SELECT @UserId, [ClaimType], [ClaimValue]
    FROM @UserClaims;

    COMMIT TRANSACTION;
END
GO