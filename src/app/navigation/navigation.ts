export const navigation = [
    {
        'id'       : 'scheduling',
        'title'    : 'Scheduling',
        'translate': 'NAV.SCHEDULING',
        'type'     : 'group',
        'icon'     : 'apps',
        'children' : [
            {
                'id'       : 'dashboards',
                'title'    : 'Dashboards',
                'translate': 'NAV.DASHBOARDS',
                'type'     : 'collapse',
                'icon'     : 'dashboard',
                'children' : [
                    {
                        'id'   : 'analytics',
                        'title': 'Analytics',
                        'type' : 'item',
                        'url'  : '/apps/dashboards/analytics'
                    },
                    {
                        'id'   : 'project',
                        'title': 'Project',
                        'type' : 'item',
                        'url'  : '/apps/dashboards/project'
                    }
                ]
            },
            {
                'id'       : 'dashboard',
                'title'    : 'Dashboard',
                'translate': 'NAV.DASHBOARD',
                'type'     : 'item',
                'icon'     : 'dashboard',
                'url'  : '/apps/dashboards/project'
            },
            {
                'id'       : 'schedules_overview',
                'title'    : 'Schedules overview',
                'translate': 'NAV.SCHEDULES_OVERVIEW',
                'type'     : 'item',
                'icon'     : 'date_range',
                'url'      : '/apps/calendar'
            },
            {
                'id'       : 'create_schedule',
                'title'    : 'Create schedule',
                'translate': 'NAV.CREATE_SCHEDULE',
                'type'     : 'item',
                'icon'     : 'today',
                'url'      : '/apps/calendar'
            },
            
        ]
    },
    {
        'id'      : 'communication',
        'title'   : 'Communication',
        'translate': 'NAV.COMMUNICATION',
        'type'    : 'group',
        'icon'    : 'forum',
        'children': [
            {
                'id'       : 'mailbox',
                'title'    : 'Mailbox',
                'translate': 'NAV.MAILBOX.TITLE',
                'type'     : 'item',
                'icon'     : 'email',
                'url'      : '/apps/mail',
                'badge'    : {
                    'title'    : 25,
                    'translate': 'NAV.MAILBOX.BADGE',
                    'bg'       : '#F44336',
                    'fg'       : '#FFFFFF'
                }
            },            
            {
                'id'       : 'chat',
                'title'    : 'Chat',
                'translate': 'NAV.CHAT',
                'type'     : 'item',
                'icon'     : 'chat',
                'url'      : '/apps/chat',
                'badge'    : {
                    'title': 13,
                    'bg'   : '#09d261',
                    'fg'   : '#FFFFFF'
                }
            },
            {
                'id'       : 'contacts',
                'title'    : 'Contacts',
                'translate': 'NAV.CONTACTS',
                'type'     : 'item',
                'icon'     : 'account_box',
                'url'      : '/apps/contacts'
            }
        ]
    },
    {
        'id'      : 'personal',
        'title'   : 'Personal',
        'translate': 'NAV.PERSONAL',
        'type'    : 'group',
        'children': [
            {
                'id'      : 'authentication',
                'title'   : 'Authentication',
                'type'    : 'collapse',
                'icon'    : 'lock',
                'badge'   : {
                    'title': 10,
                    'bg'   : '#525e8a',
                    'fg'   : '#FFFFFF'
                },
                'children': [
                    {
                        'id'   : 'login',
                        'title': 'Login',
                        'type' : 'item',
                        'url'  : '/pages/auth/login'
                    },
                    {
                        'id'   : 'login-v2',
                        'title': 'Login v2',
                        'type' : 'item',
                        'url'  : '/pages/auth/login-2'
                    },
                    {
                        'id'   : 'register',
                        'title': 'Register',
                        'type' : 'item',
                        'url'  : '/pages/auth/register'
                    },
                    {
                        'id'   : 'register-v2',
                        'title': 'Register v2',
                        'type' : 'item',
                        'url'  : '/pages/auth/register-2'
                    },
                    {
                        'id'   : 'forgot-password',
                        'title': 'Forgot Password',
                        'type' : 'item',
                        'url'  : '/pages/auth/forgot-password'
                    },
                    {
                        'id'   : 'forgot-password-v2',
                        'title': 'Forgot Password v2',
                        'type' : 'item',
                        'url'  : '/pages/auth/forgot-password-2'
                    },
                    {
                        'id'   : 'reset-password',
                        'title': 'Reset Password',
                        'type' : 'item',
                        'url'  : '/pages/auth/reset-password'
                    },
                    {
                        'id'   : 'reset-password-v2',
                        'title': 'Reset Password v2',
                        'type' : 'item',
                        'url'  : '/pages/auth/reset-password-2'
                    },
                    {
                        'id'   : 'lock-screen',
                        'title': 'Lock Screen',
                        'type' : 'item',
                        'url'  : '/pages/auth/lock'
                    },
                    {
                        'id'   : 'mail-confirmation',
                        'title': 'Mail Confirmation',
                        'type' : 'item',
                        'url'  : '/pages/auth/mail-confirm'
                    }
                ]
            },
            {
                'id'   : 'profile',
                'title': 'Profile',
                'type' : 'item',
                'icon' : 'person',
                'url'  : '/pages/profile'
            }
        ]
    },
];
