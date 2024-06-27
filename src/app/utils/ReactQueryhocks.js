
import { useQuery } from '@tanstack/react-query';
import * as DataApi from './DataApi'


export const useQueryGetAllproductos = (queryKey) => {
    const { isLoading, data, isError, error } = useQuery({
        queryKey: queryKey,
        queryFn: () => DataApi.verProductos()
    });

    return {
        isLoading,
        data,
        isError,
        error
    };
}

