CREATE TABLE [dbo].[Patient]
 (
	[PatientId]    BIGINT       NOT NULL PRIMARY KEY IDENTITY,
	[Name]	       NVARCHAR(20) NOT NULL,
	[LastName]     NVARCHAR(20) NOT NULL,
	[DNI]          NVARCHAR(50) NOT NULL,
	[Age]          DATETIME2,
	[City]         NVARCHAR(100) NOT NULL,
	[Phone]        NVARCHAR(32) NOT NULL, 
	[CreatedDate]  DATETIME2	NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    [ModifiedDate] DATETIME2	NULL, 
    [DeletedDate]  DATETIME2	NULL, 
    [IsEdit]       BIT			NOT NULL DEFAULT 0, 
    [IsDelete]     BIT          NOT NULL DEFAULT 0,
)
GO