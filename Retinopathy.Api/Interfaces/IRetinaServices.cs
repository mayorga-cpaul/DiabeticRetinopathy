namespace Retinopathy.Api.Interfaces;

using Retinopathy.Api.Helpers;
using Retinopathy.Api.ViewModels.Patient;
using Retinopathy.DataTransferObject.Commons;
using Retinopathy.DataTransferObject.Fetchs;

public interface IRetinaServices
{
    Task<(EntityId, string)> InsertPatientAsync(InsertPatientRequest Request);
    
    Task<EntityId> InsertRetinopathyExamWhenExistPatientAsync(InsertRetinopathyExamWhenExistPatientRequest Request);
    
    IAsyncEnumerable<FetchHistoryPatientAssignedToDoctor> FetchHistoryPatientAssignedToDoctorAsync(long PatientId, long DoctorId);
    
    IAsyncEnumerable<FetchRetinaConditionsByPatientId> FetchRetinaConditionsByPatientIdAsync(long PatientId);
    
    Task UpdateDiagnosisConclusionAsync(UpdateDiagnosisConclusionRequest Request);
}