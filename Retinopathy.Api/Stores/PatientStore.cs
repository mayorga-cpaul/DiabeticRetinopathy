namespace Retinopathy.Api.Stores;

using Dapper;
using Retinopathy.Api.Exceptions;
using Retinopathy.Api.Extensions;
using Retinopathy.Api.Helpers;
using Retinopathy.Api.ViewModels.Patient;
using Retinopathy.Model;
using Retinopathy.Model.Auth.Roles;
using System.Data;

public static class PatientStore
{
    public static async ValueTask<(EntityId, string)> CreatePatientAsync(this IStore<RetinopathyExam> Store, CreatePatientRequest Request)
    {
        var PasswordToReturn = Request.Password.GenerateRandomPassword();
        Request.Password = Convert.ToBase64String(PasswordToReturn.ComputeHashSha512());

        DynamicParameters Parameters = Request.ToDynamicParameters();
        Parameters.Add(nameof(RetinopathyExam.RetinopathyExamId), default, DbType.Int64, ParameterDirection.Output);

        using var SqlTransaction = await Store.BeginTransactionAsync();

        try
        {
            await Store.ExecuteStoredProcedureAsync("[dbo].[InsertPatient]", Parameters, SqlTransaction);

            SqlTransaction.Commit();

            return (Parameters.Get<long>(nameof(Role.RoleId)), PasswordToReturn);
        }
        catch (Exception Ex)
        {
            EyesCareException EyesCareExceptionEx = Ex.ToEyesCareException(
                "377919C9-D713-45C0-8C8B-9424D042E348", 
                "0001", 
                "Error al insertar el paciente", 
                "PS0001");

            try
            {
                SqlTransaction.Rollback();
            }
            catch (Exception ExRollback)
            {
                throw ExRollback.ToEyesCareException("1DC6D75F-5C94-4C22-BD7D-B4E77A660736", "0002", "Error al insertar el pacient", "PS0001");
            }

            throw EyesCareExceptionEx;
        }
    }

    public static async ValueTask<EntityId> CreateRetinopathyExamAsync(this IStore<Role> Store, CreateRetinopathyExamRequest Request)
    {
        DynamicParameters Parameters = Request.ToDynamicParameters();
        Parameters.Add(nameof(RetinopathyExam.RetinopathyExamId), default, DbType.Int64, ParameterDirection.Output);

        using var SqlTransaction = await Store.BeginTransactionAsync();

        try
        {
            await Store.ExecuteStoredProcedureAsync("[dbo].[InsertRetinopathyExamWhenExistPatient]", Parameters, SqlTransaction);

            SqlTransaction.Commit();

            return Parameters.Get<long>(nameof(Role.RoleId));
        }
        catch (Exception Ex)
        {
            EyesCareException EyesCareExceptionEx = Ex.ToEyesCareException(
                "F8A96D0C-75EF-4DCA-8206-304C5191BA8E", 
                "0001", 
                "Error al insertar el examen de retinopatia", 
                "PS0001");

            try
            {
                SqlTransaction.Rollback();
            }
            catch (Exception ExRollback)
            {
                throw ExRollback.ToEyesCareException(
                    "5A6CF2E3-4702-407A-939C-AC1C905626FE", 
                    "0002", 
                    "Error al insertar el examen", 
                    "PS0001");
            }

            throw EyesCareExceptionEx;
        }
    }

    public static async ValueTask UpdateDiagnosisConclusionAsync(this IStore<Role> Store, DiagnosisConclusionUpdateRequest Request)
    {
        DynamicParameters Parameters = Request.ToDynamicParameters();

        using var SqlTransaction = await Store.BeginTransactionAsync();

        try
        {
            await Store.ExecuteStoredProcedureAsync("[dbo].[UpdateDiagnosisConclusion]", Parameters, SqlTransaction);

            SqlTransaction.Commit();
        }
        catch (Exception Ex)
        {
            EyesCareException EyesCareExceptionEx = Ex.ToEyesCareException(
                "2788331B-1791-4128-BA49-DF808AB6FF20", 
                "0001", 
                "Error al actualizar el dianóstico", 
                "PS0001");

            try
            {
                SqlTransaction.Rollback();
            }
            catch (Exception ExRollback)
            {
                throw ExRollback.ToEyesCareException(
                    "77152B40-13CD-496D-A207-F11030BADB47", 
                    "0002", "Error al actualizar el registro", "RS0001");
            }

            throw EyesCareExceptionEx;
        }
    }
}