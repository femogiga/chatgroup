import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from '../utility/apiService';
import { useDispatch } from 'react-redux';
import { setAuthData } from '../features/body/mainSlice';

export const useUserData = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['userData'],
    queryFn: () => apiService.get('/users').then((res) => res.data),
  });
  return { isPending, error, data };
};

export const useUserGroup = (id) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['userGroup'],
    queryFn: () =>
      apiService.get(`/users/${id}/channels`).then((res) => res.data),
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
  const dispatch = useDispatch();

  const { isLoading, isSuccess, error, mutate } = useMutation({
    mutationFn: async (data) => {
      const response = await apiService.post('/auth/login', data);

      return response.data;
    },
    onSuccess: (data) => {
      // queryClient.invalidateQueries({ queryKey: ['useronchannel'] });
      localStorage.setItem('token', data.token);
      localStorage.setItem('userData', JSON.stringify(data.user));
      dispatch(setAuthData(data.user));
    },
  });

  return { isLoading, isSuccess, error, mutate };
};

export const useRegisterMutation = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { isLoading, isSuccess, error, mutate } = useMutation({
    mutationFn: async (data) => {
      const response = await apiService.post('/auth/register', data);

      return response.data;
    },
    onSuccess: (data) => {
      // queryClient.invalidateQueries({ queryKey: ['useronchannel'] });
      localStorage.setItem('token', data.token);
      localStorage.setItem('userData', JSON.stringify(data.user));
      dispatch(setAuthData(data.user));
    },
  });

  return { isLoading, isSuccess, error, mutate };
};

export const useUpdateUerMutation = () => {
  const queryClient = useQueryClient();

  const { isLoading, isSuccess, error, mutate } = useMutation({
    mutationFn: async (id, data) => {
      const response = await apiService.put(`/users/${id}`, data);
      // console.log(response.data);
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['useronchannel'] });

      // localStorage.setItem('userData', JSON.stringify(data.user));
    },
  });

  return { isLoading, isSuccess, error, mutate };
};
