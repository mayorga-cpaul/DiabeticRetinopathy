using Dapper;
using Retinopathy.Api.Stores;
using Retinopathy.Api.ViewModels;
using System.Data;
using System.Reflection;

namespace Retinopathy.Api.Extensions;

public static class GeneralExtensions
{
    public static TObject? As<TObject>(this object? @object) => (TObject?)@object;

    /// <summary>
    /// 
    /// </summary>
    /// <param name="object"></param>
    /// <returns></returns>
    public static IStore AsStore(this object @object) => @object.As<IStore>()!;

    public static DynamicParameters ToDynamicParameters(this IViewModel ViewModel)
    {
        var Parameters = new DynamicParameters();

        PropertyInfo[] Properties = ViewModel.GetType().GetProperties();

        foreach (var Property in Properties)
        {
            switch (Property.GetValue(ViewModel))
            {
                case IEnumerable<IViewModel> Values:
                    {
                        Parameters.Add(Property.Name, Values.ToDataTable(), DbType.Object, ParameterDirection.Input);
                        break;
                    }
                case object Value:
                    {
                        Parameters.Add(Property.Name, Value);
                        break;
                    }
            }
        }

        return Parameters;
    }
}
