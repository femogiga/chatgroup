import { useQuery, useMutation } from '@tanstack/react-query';
import apiService from '../utility/apiService';

export const useUserData = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['userData'],
    queryFn: () => apiService.get('/users').then((res) => res.data),
  });
  return { isPending, error, data };
};



