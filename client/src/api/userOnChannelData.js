import { useQuery, useMutation } from '@tanstack/react-query';
import apiService from '../utility/apiService';

export const useUserOnChannelData = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['useronchannel'],
    queryFn: () => apiService.get('/subscriptions').then((res) => res.data),
  });
  return { isPending, error, data };
};

export const useUserOnChannelDataById = (id) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['userOnChannelById'],
    queryFn: () =>
      apiService.get(`/subscriptions/${id}`).then((res) => res.data),
  });
  return { isPending, error, data };
};
