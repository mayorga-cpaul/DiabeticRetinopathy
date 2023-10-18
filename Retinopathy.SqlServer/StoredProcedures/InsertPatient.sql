CREATE PROCEDURE [dbo].[InsertPatient]
    @RetinopathyExamId     BIGINT OUTPUT,
    @UserName              NVARCHAR(64),
    @Email                 NVARCHAR(64),
    @Password              NVARCHAR(MAX),
    @Phone                 NVARCHAR(64),
    @DoctorId              BIGINT,
    @NurseId               BIGINT,
	@ImageSource           NVARCHAR(MAX),
	@Mild                  FLOAT,      
    @NoDiabeticRetinopathy FLOAT,
    @Severe                FLOAT,
    @Moderate              FLOAT,
    @Proliferative         FLOAT,
    @AIAnalysis            NVARCHAR(MAX),
    @Roles      [dbo].[AssignRequestType] READONLY,
    @UserClaims [dbo].[ClaimRequestType]  READONLY
AS BEGIN
  DECLARE @UserId BIGINT;
  
  -- Inserta el nuevo usuario en la tabla User
  INSERT INTO [dbo].[User] ([UserName], [Email], [Password], [Phone])
  VALUES (@UserName, @Email, @Password, @Phone);
  
  INSERT INTO [dbo].[RoleUser] ([UserId], [RoleId])
  SELECT @UserId, R.RoleId 
  FROM [Role] AS R
  WHERE R.[Name] IN (SELECT RS.[RoleName] FROM @Roles AS RS);
  
  -- Inserta los claims del usuario en la tabla "UserClaim"
  INSERT INTO [dbo].[UserClaim] ([UserId], [ClaimType], [ClaimValue])
  SELECT @UserId, [ClaimType], [ClaimValue]
  FROM @UserClaims;
  
  -- Obtiene el ID del nuevo usuario insertado
  SET @UserId = SCOPE_IDENTITY();
  
  INSERT INTO [dbo].[RetinopathyExam] ([PatientId],[NurseId] ,[ImageSource])
  VALUES (@UserId, @NurseId, @ImageSource)
  
  SET @RetinopathyExamId = SCOPE_IDENTITY();
  
  INSERT INTO [dbo].[RetinaConditionsFindings] 
  ([RetinopathyExamId], [Mild], [NoDiabeticRetinopathy], [Severe], [Moderate], [Proliferative], [AIAnalysis])
  VALUES
  (@RetinopathyExamId, @Mild, @NoDiabeticRetinopathy, @Severe, @Moderate, @Proliferative, @AIAnalysis)
  
  INSERT INTO [dbo].[DiagnosisConclusion]([RetinopathyExamId], [DoctorId]) VALUES(@RetinopathyExamId, @DoctorId);
  COMMIT TRANSACTION
END
GO