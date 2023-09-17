﻿/*
Deployment script for Retinopathy

This code was generated by a tool.
Changes to this file may cause incorrect behavior and will be lost if
the code is regenerated.
*/

GO
SET ANSI_NULLS, ANSI_PADDING, ANSI_WARNINGS, ARITHABORT, CONCAT_NULL_YIELDS_NULL, QUOTED_IDENTIFIER ON;

SET NUMERIC_ROUNDABORT OFF;


GO
:setvar DatabaseName "Retinopathy"
:setvar DefaultFilePrefix "Retinopathy"
:setvar DefaultDataPath "C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\"
:setvar DefaultLogPath "C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\"

GO
:on error exit
GO
/*
Detect SQLCMD mode and disable script execution if SQLCMD mode is not supported.
To re-enable the script after enabling SQLCMD mode, execute the following:
SET NOEXEC OFF; 
*/
:setvar __IsSqlCmdEnabled "True"
GO
IF N'$(__IsSqlCmdEnabled)' NOT LIKE N'True'
    BEGIN
        PRINT N'SQLCMD mode must be enabled to successfully execute this script.';
        SET NOEXEC ON;
    END


GO
USE [master];


GO

IF (DB_ID(N'$(DatabaseName)') IS NOT NULL) 
BEGIN
    ALTER DATABASE [$(DatabaseName)]
    SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
    DROP DATABASE [$(DatabaseName)];
END

GO
PRINT N'Creating database $(DatabaseName)...'
GO
CREATE DATABASE [$(DatabaseName)]
    ON 
    PRIMARY(NAME = [$(DatabaseName)], FILENAME = N'$(DefaultDataPath)$(DefaultFilePrefix)_Primary.mdf')
    LOG ON (NAME = [$(DatabaseName)_log], FILENAME = N'$(DefaultLogPath)$(DefaultFilePrefix)_Primary.ldf') COLLATE SQL_Latin1_General_CP1_CI_AS
GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET AUTO_CLOSE OFF 
            WITH ROLLBACK IMMEDIATE;
    END


GO
USE [$(DatabaseName)];


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET ANSI_NULLS ON,
                ANSI_PADDING ON,
                ANSI_WARNINGS ON,
                ARITHABORT ON,
                CONCAT_NULL_YIELDS_NULL ON,
                NUMERIC_ROUNDABORT OFF,
                QUOTED_IDENTIFIER ON,
                ANSI_NULL_DEFAULT ON,
                CURSOR_DEFAULT LOCAL,
                RECOVERY FULL,
                CURSOR_CLOSE_ON_COMMIT OFF,
                AUTO_CREATE_STATISTICS ON,
                AUTO_SHRINK OFF,
                AUTO_UPDATE_STATISTICS ON,
                RECURSIVE_TRIGGERS OFF 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET ALLOW_SNAPSHOT_ISOLATION OFF;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET READ_COMMITTED_SNAPSHOT OFF 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET AUTO_UPDATE_STATISTICS_ASYNC OFF,
                PAGE_VERIFY NONE,
                DATE_CORRELATION_OPTIMIZATION OFF,
                DISABLE_BROKER,
                PARAMETERIZATION SIMPLE,
                SUPPLEMENTAL_LOGGING OFF 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF IS_SRVROLEMEMBER(N'sysadmin') = 1
    BEGIN
        IF EXISTS (SELECT 1
                   FROM   [master].[dbo].[sysdatabases]
                   WHERE  [name] = N'$(DatabaseName)')
            BEGIN
                EXECUTE sp_executesql N'ALTER DATABASE [$(DatabaseName)]
    SET TRUSTWORTHY OFF,
        DB_CHAINING OFF 
    WITH ROLLBACK IMMEDIATE';
            END
    END
ELSE
    BEGIN
        PRINT N'The database settings cannot be modified. You must be a SysAdmin to apply these settings.';
    END


GO
IF IS_SRVROLEMEMBER(N'sysadmin') = 1
    BEGIN
        IF EXISTS (SELECT 1
                   FROM   [master].[dbo].[sysdatabases]
                   WHERE  [name] = N'$(DatabaseName)')
            BEGIN
                EXECUTE sp_executesql N'ALTER DATABASE [$(DatabaseName)]
    SET HONOR_BROKER_PRIORITY OFF 
    WITH ROLLBACK IMMEDIATE';
            END
    END
ELSE
    BEGIN
        PRINT N'The database settings cannot be modified. You must be a SysAdmin to apply these settings.';
    END


GO
ALTER DATABASE [$(DatabaseName)]
    SET TARGET_RECOVERY_TIME = 0 SECONDS 
    WITH ROLLBACK IMMEDIATE;


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET FILESTREAM(NON_TRANSACTED_ACCESS = OFF),
                CONTAINMENT = NONE 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET AUTO_CREATE_STATISTICS ON(INCREMENTAL = OFF),
                MEMORY_OPTIMIZED_ELEVATE_TO_SNAPSHOT = OFF,
                DELAYED_DURABILITY = DISABLED 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET QUERY_STORE (QUERY_CAPTURE_MODE = ALL, DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_PLANS_PER_QUERY = 200, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 367), MAX_STORAGE_SIZE_MB = 100) 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET QUERY_STORE = OFF 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
        ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
        ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
        ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
        ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
        ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
        ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
        ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET TEMPORAL_HISTORY_RETENTION ON 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF fulltextserviceproperty(N'IsFulltextInstalled') = 1
    EXECUTE sp_fulltext_database 'enable';


GO
PRINT N'Creating Table [dbo].[Diagnostic]...';


GO
CREATE TABLE [dbo].[Diagnostic] (
    [DiagnosticId]        BIGINT         IDENTITY (1, 1) NOT NULL,
    [DoctorId]            BIGINT         NULL,
    [NurseId]             BIGINT         NOT NULL,
    [RetinopathyResultId] BIGINT         NOT NULL,
    [PatientId]           BIGINT         NOT NULL,
    [PatientStatus]       NVARCHAR (200) NULL,
    [Observations]        NVARCHAR (200) NULL,
    [CreatedDate]         DATETIME2 (7)  NOT NULL,
    [ModifiedDate]        DATETIME2 (7)  NULL,
    [DeletedDate]         DATETIME2 (7)  NULL,
    [IsEdit]              BIT            NOT NULL,
    [IsDelete]            BIT            NOT NULL,
    PRIMARY KEY CLUSTERED ([DiagnosticId] ASC)
);


GO
PRINT N'Creating Table [dbo].[Doctor]...';


GO
CREATE TABLE [dbo].[Doctor] (
    [DoctorId]     BIGINT        IDENTITY (1, 1) NOT NULL,
    [Name]         NVARCHAR (32) NOT NULL,
    [LastName]     NVARCHAR (20) NOT NULL,
    [Phone]        NVARCHAR (32) NOT NULL,
    [DNI]          NVARCHAR (50) NOT NULL,
    [CreatedDate]  DATETIME2 (7) NOT NULL,
    [ModifiedDate] DATETIME2 (7) NULL,
    [DeletedDate]  DATETIME2 (7) NULL,
    [IsEdit]       BIT           NOT NULL,
    [IsDelete]     BIT           NOT NULL,
    PRIMARY KEY CLUSTERED ([DoctorId] ASC)
);


GO
PRINT N'Creating Table [dbo].[Nurse]...';


GO
CREATE TABLE [dbo].[Nurse] (
    [NurseId]      BIGINT        IDENTITY (1, 1) NOT NULL,
    [Name]         NVARCHAR (32) NOT NULL,
    [LastName]     NVARCHAR (20) NOT NULL,
    [DNI]          NVARCHAR (50) NOT NULL,
    [Phone]        NVARCHAR (32) NOT NULL,
    [CreatedDate]  DATETIME2 (7) NOT NULL,
    [ModifiedDate] DATETIME2 (7) NULL,
    [DeletedDate]  DATETIME2 (7) NULL,
    [IsEdit]       BIT           NOT NULL,
    [IsDelete]     BIT           NOT NULL,
    PRIMARY KEY CLUSTERED ([NurseId] ASC)
);


GO
PRINT N'Creating Table [dbo].[Patient]...';


GO
CREATE TABLE [dbo].[Patient] (
    [PatientId]    BIGINT         IDENTITY (1, 1) NOT NULL,
    [Name]         NVARCHAR (20)  NOT NULL,
    [LastName]     NVARCHAR (20)  NOT NULL,
    [DNI]          NVARCHAR (50)  NOT NULL,
    [Age]          DATETIME2 (7)  NULL,
    [City]         NVARCHAR (100) NOT NULL,
    [Phone]        NVARCHAR (32)  NOT NULL,
    [CreatedDate]  DATETIME2 (7)  NOT NULL,
    [ModifiedDate] DATETIME2 (7)  NULL,
    [DeletedDate]  DATETIME2 (7)  NULL,
    [IsEdit]       BIT            NOT NULL,
    [IsDelete]     BIT            NOT NULL,
    PRIMARY KEY CLUSTERED ([PatientId] ASC)
);


GO
PRINT N'Creating Table [dbo].[RetinopathyResult]...';


GO
CREATE TABLE [dbo].[RetinopathyResult] (
    [RetinopathyResultId] BIGINT        IDENTITY (1, 1) NOT NULL,
    [Mild]                FLOAT (53)    NULL,
    [NO_DR]               FLOAT (53)    NULL,
    [Severe]              FLOAT (53)    NULL,
    [Moderate]            FLOAT (53)    NULL,
    [Proliferative]       FLOAT (53)    NULL,
    [CreatedDate]         DATETIME2 (7) NOT NULL,
    [ModifiedDate]        DATETIME2 (7) NULL,
    [DeletedDate]         DATETIME2 (7) NULL,
    [IsEdit]              BIT           NOT NULL,
    [IsDelete]            BIT           NOT NULL,
    PRIMARY KEY CLUSTERED ([RetinopathyResultId] ASC)
);


GO
PRINT N'Creating Table [dbo].[Role]...';


GO
CREATE TABLE [dbo].[Role] (
    [RoleId]       BIGINT        IDENTITY (1, 1) NOT NULL,
    [Name]         NVARCHAR (30) NOT NULL,
    [CreatedDate]  DATETIME2 (7) NOT NULL,
    [ModifiedDate] DATETIME2 (7) NULL,
    [DeletedDate]  DATETIME2 (7) NULL,
    [IsEdit]       BIT           NOT NULL,
    [IsDelete]     BIT           NOT NULL,
    PRIMARY KEY CLUSTERED ([RoleId] ASC)
);


GO
PRINT N'Creating Table [dbo].[RoleClaim]...';


GO
CREATE TABLE [dbo].[RoleClaim] (
    [RoleClaimId]  BIGINT        IDENTITY (1, 1) NOT NULL,
    [RoleId]       BIGINT        NOT NULL,
    [ClaimType]    NVARCHAR (30) NOT NULL,
    [ClaimValue]   NVARCHAR (30) NOT NULL,
    [CreatedDate]  DATETIME2 (7) NOT NULL,
    [ModifiedDate] DATETIME2 (7) NULL,
    [DeletedDate]  DATETIME2 (7) NULL,
    [IsEdit]       BIT           NOT NULL,
    [IsDelete]     BIT           NOT NULL,
    PRIMARY KEY CLUSTERED ([RoleClaimId] ASC)
);


GO
PRINT N'Creating Table [dbo].[RoleUser]...';


GO
CREATE TABLE [dbo].[RoleUser] (
    [RoleUserId]   BIGINT        IDENTITY (1, 1) NOT NULL,
    [RoleId]       BIGINT        NOT NULL,
    [UserId]       BIGINT        NOT NULL,
    [CreatedDate]  DATETIME2 (7) NOT NULL,
    [ModifiedDate] DATETIME2 (7) NULL,
    [DeletedDate]  DATETIME2 (7) NULL,
    [IsEdit]       BIT           NOT NULL,
    [IsDelete]     BIT           NOT NULL,
    PRIMARY KEY CLUSTERED ([RoleUserId] ASC)
);


GO
PRINT N'Creating Table [dbo].[User]...';


GO
CREATE TABLE [dbo].[User] (
    [UserId]       BIGINT         IDENTITY (1, 1) NOT NULL,
    [UserName]     NVARCHAR (64)  NOT NULL,
    [Email]        NVARCHAR (64)  NOT NULL,
    [Password]     NVARCHAR (MAX) NOT NULL,
    [Phone]        NVARCHAR (16)  NOT NULL,
    [CreatedDate]  DATETIME2 (7)  NOT NULL,
    [ModifiedDate] DATETIME2 (7)  NULL,
    [DeletedDate]  DATETIME2 (7)  NULL,
    [IsEdit]       BIT            NOT NULL,
    [IsDelete]     BIT            NOT NULL,
    PRIMARY KEY CLUSTERED ([UserId] ASC),
    CONSTRAINT [AK_User_Email] UNIQUE NONCLUSTERED ([Email] ASC),
    CONSTRAINT [AK_User_Phone] UNIQUE NONCLUSTERED ([Phone] ASC),
    CONSTRAINT [AK_User_UserName] UNIQUE NONCLUSTERED ([UserName] ASC)
);


GO
PRINT N'Creating Table [dbo].[UserClaim]...';


GO
CREATE TABLE [dbo].[UserClaim] (
    [UserClaimId]  BIGINT        IDENTITY (1, 1) NOT NULL,
    [UserId]       BIGINT        NOT NULL,
    [ClaimType]    NVARCHAR (30) NOT NULL,
    [ClaimValue]   NVARCHAR (30) NOT NULL,
    [CreatedDate]  DATETIME2 (7) NOT NULL,
    [ModifiedDate] DATETIME2 (7) NULL,
    [DeletedDate]  DATETIME2 (7) NULL,
    [IsEdit]       BIT           NOT NULL,
    [IsDelete]     BIT           NOT NULL,
    PRIMARY KEY CLUSTERED ([UserClaimId] ASC)
);


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[Diagnostic]...';


GO
ALTER TABLE [dbo].[Diagnostic]
    ADD DEFAULT CURRENT_TIMESTAMP FOR [CreatedDate];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[Diagnostic]...';


GO
ALTER TABLE [dbo].[Diagnostic]
    ADD DEFAULT 0 FOR [IsEdit];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[Diagnostic]...';


GO
ALTER TABLE [dbo].[Diagnostic]
    ADD DEFAULT 0 FOR [IsDelete];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[Doctor]...';


GO
ALTER TABLE [dbo].[Doctor]
    ADD DEFAULT CURRENT_TIMESTAMP FOR [CreatedDate];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[Doctor]...';


GO
ALTER TABLE [dbo].[Doctor]
    ADD DEFAULT 0 FOR [IsEdit];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[Doctor]...';


GO
ALTER TABLE [dbo].[Doctor]
    ADD DEFAULT 0 FOR [IsDelete];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[Nurse]...';


GO
ALTER TABLE [dbo].[Nurse]
    ADD DEFAULT CURRENT_TIMESTAMP FOR [CreatedDate];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[Nurse]...';


GO
ALTER TABLE [dbo].[Nurse]
    ADD DEFAULT 0 FOR [IsEdit];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[Nurse]...';


GO
ALTER TABLE [dbo].[Nurse]
    ADD DEFAULT 0 FOR [IsDelete];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[Patient]...';


GO
ALTER TABLE [dbo].[Patient]
    ADD DEFAULT CURRENT_TIMESTAMP FOR [CreatedDate];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[Patient]...';


GO
ALTER TABLE [dbo].[Patient]
    ADD DEFAULT 0 FOR [IsEdit];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[Patient]...';


GO
ALTER TABLE [dbo].[Patient]
    ADD DEFAULT 0 FOR [IsDelete];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[RetinopathyResult]...';


GO
ALTER TABLE [dbo].[RetinopathyResult]
    ADD DEFAULT CURRENT_TIMESTAMP FOR [CreatedDate];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[RetinopathyResult]...';


GO
ALTER TABLE [dbo].[RetinopathyResult]
    ADD DEFAULT 0 FOR [IsEdit];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[RetinopathyResult]...';


GO
ALTER TABLE [dbo].[RetinopathyResult]
    ADD DEFAULT 0 FOR [IsDelete];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[Role]...';


GO
ALTER TABLE [dbo].[Role]
    ADD DEFAULT CURRENT_TIMESTAMP FOR [CreatedDate];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[Role]...';


GO
ALTER TABLE [dbo].[Role]
    ADD DEFAULT 0 FOR [IsEdit];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[Role]...';


GO
ALTER TABLE [dbo].[Role]
    ADD DEFAULT 0 FOR [IsDelete];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[RoleClaim]...';


GO
ALTER TABLE [dbo].[RoleClaim]
    ADD DEFAULT CURRENT_TIMESTAMP FOR [CreatedDate];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[RoleClaim]...';


GO
ALTER TABLE [dbo].[RoleClaim]
    ADD DEFAULT 0 FOR [IsEdit];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[RoleClaim]...';


GO
ALTER TABLE [dbo].[RoleClaim]
    ADD DEFAULT 0 FOR [IsDelete];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[RoleUser]...';


GO
ALTER TABLE [dbo].[RoleUser]
    ADD DEFAULT CURRENT_TIMESTAMP FOR [CreatedDate];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[RoleUser]...';


GO
ALTER TABLE [dbo].[RoleUser]
    ADD DEFAULT 0 FOR [IsEdit];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[RoleUser]...';


GO
ALTER TABLE [dbo].[RoleUser]
    ADD DEFAULT 0 FOR [IsDelete];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[User]...';


GO
ALTER TABLE [dbo].[User]
    ADD DEFAULT CURRENT_TIMESTAMP FOR [CreatedDate];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[User]...';


GO
ALTER TABLE [dbo].[User]
    ADD DEFAULT 0 FOR [IsEdit];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[User]...';


GO
ALTER TABLE [dbo].[User]
    ADD DEFAULT 0 FOR [IsDelete];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[UserClaim]...';


GO
ALTER TABLE [dbo].[UserClaim]
    ADD DEFAULT CURRENT_TIMESTAMP FOR [CreatedDate];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[UserClaim]...';


GO
ALTER TABLE [dbo].[UserClaim]
    ADD DEFAULT 0 FOR [IsEdit];


GO
PRINT N'Creating Default Constraint unnamed constraint on [dbo].[UserClaim]...';


GO
ALTER TABLE [dbo].[UserClaim]
    ADD DEFAULT 0 FOR [IsDelete];


GO
PRINT N'Creating Foreign Key [dbo].[FK_PatientDiagnostic_Patient_PatientId]...';


GO
ALTER TABLE [dbo].[Diagnostic]
    ADD CONSTRAINT [FK_PatientDiagnostic_Patient_PatientId] FOREIGN KEY ([PatientId]) REFERENCES [dbo].[Patient] ([PatientId]);


GO
PRINT N'Creating Foreign Key [dbo].[FK_Diagnostic_Retinopathy_Id]...';


GO
ALTER TABLE [dbo].[Diagnostic]
    ADD CONSTRAINT [FK_Diagnostic_Retinopathy_Id] FOREIGN KEY ([RetinopathyResultId]) REFERENCES [dbo].[RetinopathyResult] ([RetinopathyResultId]);


GO
PRINT N'Creating Foreign Key [dbo].[FK_NurseDiagnostic_Diagnostic_NurseId]...';


GO
ALTER TABLE [dbo].[Diagnostic]
    ADD CONSTRAINT [FK_NurseDiagnostic_Diagnostic_NurseId] FOREIGN KEY ([NurseId]) REFERENCES [dbo].[Nurse] ([NurseId]);


GO
PRINT N'Creating Foreign Key [dbo].[FK_DoctorDiagnostic_Diagnostic_DoctorId]...';


GO
ALTER TABLE [dbo].[Diagnostic]
    ADD CONSTRAINT [FK_DoctorDiagnostic_Diagnostic_DoctorId] FOREIGN KEY ([DoctorId]) REFERENCES [dbo].[Doctor] ([DoctorId]);


GO
PRINT N'Creating Foreign Key [dbo].[FK_RoleClaim_Role_RoleId]...';


GO
ALTER TABLE [dbo].[RoleClaim]
    ADD CONSTRAINT [FK_RoleClaim_Role_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[Role] ([RoleId]);


GO
PRINT N'Creating Foreign Key [dbo].[FK_RoleUser_User_UserId]...';


GO
ALTER TABLE [dbo].[RoleUser]
    ADD CONSTRAINT [FK_RoleUser_User_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[User] ([UserId]);


GO
PRINT N'Creating Foreign Key [dbo].[FK_RoleUser_Role_RoleId]...';


GO
ALTER TABLE [dbo].[RoleUser]
    ADD CONSTRAINT [FK_RoleUser_Role_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[Role] ([RoleId]);


GO
PRINT N'Creating Foreign Key [dbo].[FK_UserClaim_User_UserId]...';


GO
ALTER TABLE [dbo].[UserClaim]
    ADD CONSTRAINT [FK_UserClaim_User_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[User] ([UserId]);


GO
DECLARE @VarDecimalSupported AS BIT;

SELECT @VarDecimalSupported = 0;

IF ((ServerProperty(N'EngineEdition') = 3)
    AND (((@@microsoftversion / power(2, 24) = 9)
          AND (@@microsoftversion & 0xffff >= 3024))
         OR ((@@microsoftversion / power(2, 24) = 10)
             AND (@@microsoftversion & 0xffff >= 1600))))
    SELECT @VarDecimalSupported = 1;

IF (@VarDecimalSupported > 0)
    BEGIN
        EXECUTE sp_db_vardecimal_storage_format N'$(DatabaseName)', 'ON';
    END


GO
PRINT N'Update complete.';


GO
