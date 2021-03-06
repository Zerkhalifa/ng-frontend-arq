export const environment = {
  production: true,
  root_api: 'https://cooper-v1.herokuapp.com/api',
  endpoints: {
    get_user: '/users/get-user',
    register_user: '/users/register',
    login_user: '/users/login',
    logout_user: '/users/logout',
    edit_user: '/users/edit-user',
    register_service: '/services/create-Service',
    edit_service: '/services/edit-service',
    get_list_services: '/services/get-services',
    get_services_types: '/ServiceTypes/get-types-services',
    delete_services:'/services/delete-service',
    create_type_service: '/ServiceTypes/create-type-service'
  }
};
