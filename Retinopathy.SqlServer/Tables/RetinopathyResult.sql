CREATE TABLE [dbo].[RetinopathyResult]
(
	[RetinopathyResultId] BIGINT        NOT NULL PRIMARY KEY IDENTITY,
	[Mild]                FLOAT,
	[NO_DR]               FLOAT,
	[Severe]			  FLOAT,
	[Moderate]			  FLOAT,
	[Proliferative]       FLOAT,
	[CreatedDate]         DATETIME2     NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    [ModifiedDate]        DATETIME2     NULL, 
    [DeletedDate]         DATETIME2     NULL, 
    [IsEdit]              BIT           NOT NULL DEFAULT 0 , 
    [IsDelete]            BIT           NOT NULL DEFAULT 0,
)