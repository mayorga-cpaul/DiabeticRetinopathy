CREATE TABLE [dbo].[Doctor]
(
	[DoctorId]     BIGINT       NOT NULL PRIMARY KEY IDENTITY,
    [UserId]       BIGINT       NOT NULL,
    [Name]         NVARCHAR(32) NOT NULL,
    [LastName]     NVARCHAR(20) NOT NULL,
    [Phone]        NVARCHAR(32) NOT NULL, 
	[DNI]          NVARCHAR(50) NOT NULL,
    [CreatedDate]  DATETIME2	NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    [ModifiedDate] DATETIME2	NULL, 
    [DeletedDate]  DATETIME2	NULL, 
    [IsEdit]       BIT			NOT NULL DEFAULT 0, 
    [IsDelete]     BIT          NOT NULL DEFAULT 0,
    CONSTRAINT [FK_DoctorUser_User_UserId] FOREIGN KEY([UserId]) REFERENCES [User]([UserId])
)
