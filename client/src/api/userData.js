import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from '../utility/apiService';

export const useUserData = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['userData'],
    queryFn: () => apiService.get('/users').then((res) => res.data),
  });
  return { isPending, error, data };
};

export const useUserDataById = (id) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['userData'],
    queryFn: () => apiService.get(`/users/${id}`).then((res) => res.data),
  });
  return { isPending, error, data };
};

export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  const { isLoading, isSuccess, error, mutate } = useMutation({
    mutationFn: async (data) => {
      const response = await apiService.post('/auth/login', data);

      return response.data;
    },
    onSuccess: (data) => {
      // queryClient.invalidateQueries({ queryKey: ['useronchannel'] });
      localStorage.setItem('token', data.token);
    },
  });

  return { isLoading, isSuccess, error, mutate };
};
