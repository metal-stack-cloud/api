// Code generated discover.go. DO NOT EDIT.
package permissions

func GetServices() []string {
	return []string{
		"admin.v1.ClusterService",
		"admin.v1.PaymentService",
		"admin.v1.StorageService",
		"admin.v1.TenantService",
		"admin.v1.TokenService",
		"api.v1.AssetService",
		"api.v1.ClusterService",
		"api.v1.HealthService",
		"api.v1.IPService",
		"api.v1.MethodService",
		"api.v1.PaymentService",
		"api.v1.ProjectService",
		"api.v1.SnapshotService",
		"api.v1.TenantService",
		"api.v1.TokenService",
		"api.v1.VersionService",
		"api.v1.VolumeService",
		"status.v1.MessageService",
		"status.v1.StatusService",
	}
}

func GetServicePermissions() *ServicePermissions {
	return &ServicePermissions{
		Roles: Roles{
			Admin: &Admin{
				Editor: []string{
					"/admin.v1.ClusterService/Get",
					"/admin.v1.ClusterService/List",
					"/admin.v1.ClusterService/Credentials",
					"/admin.v1.PaymentService/ListCoupons",
					"/admin.v1.PaymentService/AddCouponToCustomer",
					"/admin.v1.PaymentService/AddBalanceToCustomer",
					"/admin.v1.StorageService/ClusterInfo",
					"/admin.v1.StorageService/ListVolumes",
					"/admin.v1.StorageService/ListSnapshots",
					"/admin.v1.TenantService/List",
					"/admin.v1.TenantService/Admit",
					"/admin.v1.TenantService/Revoke",
					"/admin.v1.TokenService/List",
					"/admin.v1.TokenService/Revoke",
				},
				Viewer: []string{
					"/admin.v1.ClusterService/Get",
					"/admin.v1.ClusterService/List",
					"/admin.v1.PaymentService/ListCoupons",
					"/admin.v1.StorageService/ClusterInfo",
					"/admin.v1.StorageService/ListVolumes",
					"/admin.v1.StorageService/ListSnapshots",
					"/admin.v1.TenantService/List",
					"/admin.v1.TokenService/List",
					"/admin.v1.TokenService/Revoke",
				},
			},
			Tenant: &Tenant{
				Owner: []string{
					"/api.v1.PaymentService/CreateOrUpdateCustomer",
					"/api.v1.PaymentService/GetCustomer",
					"/api.v1.PaymentService/GetCustomerWithLogin",
					"/api.v1.PaymentService/CheckIfCustomerExists",
					"/api.v1.PaymentService/HasPaymentMethod",
					"/api.v1.PaymentService/DeletePaymentMethod",
					"/api.v1.PaymentService/GetSubscriptionUsage",
					"/api.v1.PaymentService/GetInvoices",
					"/api.v1.PaymentService/CheckAdmitted",
					"/api.v1.PaymentService/RequestAdmission",
					"/api.v1.PaymentService/HasChargeableResources",
					"/api.v1.PaymentService/SetOnboarded",
					"/api.v1.PaymentService/GetOnboarded",
					"/api.v1.ProjectService/Create",
					"/api.v1.TenantService/Create",
					"/api.v1.TenantService/Get",
					"/api.v1.TenantService/Update",
					"/api.v1.TenantService/Delete",
				},
				Editor: []string{
					"/api.v1.PaymentService/HasPaymentMethod",
					"/api.v1.PaymentService/CheckAdmitted",
					"/api.v1.PaymentService/RequestAdmission",
					"/api.v1.PaymentService/HasChargeableResources",
					"/api.v1.ProjectService/Create",
					"/api.v1.TenantService/Create",
					"/api.v1.TenantService/Get",
					"/api.v1.TenantService/Update",
					"/api.v1.TenantService/Delete",
				},
				Viewer: []string{
					"/api.v1.PaymentService/HasPaymentMethod",
					"/api.v1.PaymentService/CheckAdmitted",
					"/api.v1.PaymentService/HasChargeableResources",
					"/api.v1.TenantService/Get",
				},
			},
			Project: &Project{
				Owner: []string{
					"/api.v1.ClusterService/Create",
					"/api.v1.ClusterService/Get",
					"/api.v1.ClusterService/List",
					"/api.v1.ClusterService/WatchStatus",
					"/api.v1.ClusterService/Delete",
					"/api.v1.ClusterService/Update",
					"/api.v1.ClusterService/GetCredentials",
					"/api.v1.ClusterService/Operate",
					"/api.v1.IPService/Get",
					"/api.v1.IPService/Allocate",
					"/api.v1.IPService/Update",
					"/api.v1.IPService/List",
					"/api.v1.IPService/Delete",
					"/api.v1.ProjectService/Get",
					"/api.v1.ProjectService/Delete",
					"/api.v1.ProjectService/Update",
					"/api.v1.ProjectService/RemoveMember",
					"/api.v1.ProjectService/Invite",
					"/api.v1.ProjectService/InviteDelete",
					"/api.v1.ProjectService/InvitesList",
					"/api.v1.VolumeService/Get",
					"/api.v1.VolumeService/List",
					"/api.v1.VolumeService/Delete",
					"/api.v1.SnapshotService/Get",
					"/api.v1.SnapshotService/List",
					"/api.v1.SnapshotService/Delete",
				},
				Editor: []string{
					"/api.v1.ClusterService/Create",
					"/api.v1.ClusterService/Get",
					"/api.v1.ClusterService/List",
					"/api.v1.ClusterService/WatchStatus",
					"/api.v1.ClusterService/Delete",
					"/api.v1.ClusterService/Update",
					"/api.v1.ClusterService/GetCredentials",
					"/api.v1.ClusterService/Operate",
					"/api.v1.IPService/Get",
					"/api.v1.IPService/Allocate",
					"/api.v1.IPService/Update",
					"/api.v1.IPService/List",
					"/api.v1.IPService/Delete",
					"/api.v1.ProjectService/Get",
					"/api.v1.ProjectService/Update",
					"/api.v1.VolumeService/Get",
					"/api.v1.VolumeService/List",
					"/api.v1.VolumeService/Delete",
					"/api.v1.SnapshotService/Get",
					"/api.v1.SnapshotService/List",
					"/api.v1.SnapshotService/Delete",
				},
				Viewer: []string{
					"/api.v1.ClusterService/Get",
					"/api.v1.ClusterService/List",
					"/api.v1.ClusterService/WatchStatus",
					"/api.v1.IPService/Get",
					"/api.v1.IPService/List",
					"/api.v1.ProjectService/Get",
					"/api.v1.VolumeService/Get",
					"/api.v1.VolumeService/List",
					"/api.v1.SnapshotService/Get",
					"/api.v1.SnapshotService/List",
				},
			},
		},
		Methods: map[string]bool{
			"/admin.v1.ClusterService/Credentials":          true,
			"/admin.v1.ClusterService/Get":                  true,
			"/admin.v1.ClusterService/List":                 true,
			"/admin.v1.PaymentService/AddBalanceToCustomer": true,
			"/admin.v1.PaymentService/AddCouponToCustomer":  true,
			"/admin.v1.PaymentService/ListCoupons":          true,
			"/admin.v1.StorageService/ClusterInfo":          true,
			"/admin.v1.StorageService/ListSnapshots":        true,
			"/admin.v1.StorageService/ListVolumes":          true,
			"/admin.v1.TenantService/Admit":                 true,
			"/admin.v1.TenantService/List":                  true,
			"/admin.v1.TenantService/Revoke":                true,
			"/admin.v1.TokenService/List":                   true,
			"/admin.v1.TokenService/Revoke":                 true,
			"/api.v1.AssetService/List":                     true,
			"/api.v1.ClusterService/Create":                 true,
			"/api.v1.ClusterService/Delete":                 true,
			"/api.v1.ClusterService/Get":                    true,
			"/api.v1.ClusterService/GetCredentials":         true,
			"/api.v1.ClusterService/List":                   true,
			"/api.v1.ClusterService/Operate":                true,
			"/api.v1.ClusterService/Update":                 true,
			"/api.v1.ClusterService/WatchStatus":            true,
			"/api.v1.HealthService/Get":                     true,
			"/api.v1.IPService/Allocate":                    true,
			"/api.v1.IPService/Delete":                      true,
			"/api.v1.IPService/Get":                         true,
			"/api.v1.IPService/List":                        true,
			"/api.v1.IPService/Update":                      true,
			"/api.v1.MethodService/List":                    true,
			"/api.v1.MethodService/TokenScopedList":         true,
			"/api.v1.PaymentService/CheckAdmitted":          true,
			"/api.v1.PaymentService/CheckIfCustomerExists":  true,
			"/api.v1.PaymentService/CreateOrUpdateCustomer": true,
			"/api.v1.PaymentService/DeletePaymentMethod":    true,
			"/api.v1.PaymentService/GetCustomer":            true,
			"/api.v1.PaymentService/GetCustomerWithLogin":   true,
			"/api.v1.PaymentService/GetDefaultPrices":       true,
			"/api.v1.PaymentService/GetInvoices":            true,
			"/api.v1.PaymentService/GetOnboarded":           true,
			"/api.v1.PaymentService/GetSubscriptionUsage":   true,
			"/api.v1.PaymentService/HasChargeableResources": true,
			"/api.v1.PaymentService/HasPaymentMethod":       true,
			"/api.v1.PaymentService/RequestAdmission":       true,
			"/api.v1.PaymentService/SetOnboarded":           true,
			"/api.v1.ProjectService/Create":                 true,
			"/api.v1.ProjectService/Delete":                 true,
			"/api.v1.ProjectService/Get":                    true,
			"/api.v1.ProjectService/Invite":                 true,
			"/api.v1.ProjectService/InviteAccept":           true,
			"/api.v1.ProjectService/InviteDelete":           true,
			"/api.v1.ProjectService/InvitesList":            true,
			"/api.v1.ProjectService/List":                   true,
			"/api.v1.ProjectService/RemoveMember":           true,
			"/api.v1.ProjectService/Update":                 true,
			"/api.v1.SnapshotService/Delete":                true,
			"/api.v1.SnapshotService/Get":                   true,
			"/api.v1.SnapshotService/List":                  true,
			"/api.v1.TenantService/Create":                  true,
			"/api.v1.TenantService/CreateOrUpdate":          true,
			"/api.v1.TenantService/Delete":                  true,
			"/api.v1.TenantService/Get":                     true,
			"/api.v1.TenantService/Update":                  true,
			"/api.v1.TokenService/Create":                   true,
			"/api.v1.TokenService/List":                     true,
			"/api.v1.TokenService/Revoke":                   true,
			"/api.v1.VersionService/Get":                    true,
			"/api.v1.VolumeService/Delete":                  true,
			"/api.v1.VolumeService/Get":                     true,
			"/api.v1.VolumeService/List":                    true,
			"/status.v1.MessageService/List":                true,
			"/status.v1.StatusService/Get":                  true,
		},
		Visibility: Visibility{
			Public: map[string]bool{
				"/api.v1.AssetService/List":                                      true,
				"/api.v1.HealthService/Get":                                      true,
				"/api.v1.MethodService/List":                                     true,
				"/api.v1.PaymentService/GetDefaultPrices":                        true,
				"/api.v1.VersionService/Get":                                     true,
				"/grpc.reflection.v1.ServerReflection/ServerReflectionInfo":      true,
				"/grpc.reflection.v1alpha.ServerReflection/ServerReflectionInfo": true,
				"/status.v1.MessageService/List":                                 true,
				"/status.v1.StatusService/Get":                                   true,
			},
			Private: map[string]bool{
				"/api.v1.TenantService/CreateOrUpdate": true,
			},
			Self: map[string]bool{
				"/api.v1.MethodService/TokenScopedList": true,
				"/api.v1.ProjectService/InviteAccept":   true,
				"/api.v1.ProjectService/List":           true,
				"/api.v1.TokenService/Create":           true,
				"/api.v1.TokenService/List":             true,
				"/api.v1.TokenService/Revoke":           true,
			},
		},
		Chargeable: map[string]bool{
			"/api.v1.ClusterService/Create": true,
			"/api.v1.ClusterService/Update": true,
			"/api.v1.IPService/Allocate":    true,
			"/api.v1.IPService/Update":      true,
		},
		Auditable: map[string]bool{
			"/admin.v1.ClusterService/Credentials":          true,
			"/admin.v1.ClusterService/Get":                  true,
			"/admin.v1.ClusterService/List":                 true,
			"/admin.v1.PaymentService/AddBalanceToCustomer": true,
			"/admin.v1.PaymentService/AddCouponToCustomer":  true,
			"/admin.v1.PaymentService/ListCoupons":          true,
			"/admin.v1.StorageService/ClusterInfo":          true,
			"/admin.v1.StorageService/ListSnapshots":        true,
			"/admin.v1.StorageService/ListVolumes":          true,
			"/admin.v1.TenantService/Admit":                 true,
			"/admin.v1.TenantService/List":                  true,
			"/admin.v1.TenantService/Revoke":                true,
			"/admin.v1.TokenService/List":                   true,
			"/admin.v1.TokenService/Revoke":                 true,
			"/api.v1.AssetService/List":                     false,
			"/api.v1.ClusterService/Create":                 true,
			"/api.v1.ClusterService/Delete":                 true,
			"/api.v1.ClusterService/Get":                    false,
			"/api.v1.ClusterService/GetCredentials":         true,
			"/api.v1.ClusterService/List":                   false,
			"/api.v1.ClusterService/Operate":                true,
			"/api.v1.ClusterService/Update":                 true,
			"/api.v1.ClusterService/WatchStatus":            false,
			"/api.v1.HealthService/Get":                     false,
			"/api.v1.IPService/Allocate":                    true,
			"/api.v1.IPService/Delete":                      true,
			"/api.v1.IPService/Get":                         false,
			"/api.v1.IPService/List":                        false,
			"/api.v1.IPService/Update":                      true,
			"/api.v1.MethodService/List":                    true,
			"/api.v1.MethodService/TokenScopedList":         true,
			"/api.v1.PaymentService/CheckAdmitted":          false,
			"/api.v1.PaymentService/CheckIfCustomerExists":  false,
			"/api.v1.PaymentService/CreateOrUpdateCustomer": true,
			"/api.v1.PaymentService/DeletePaymentMethod":    true,
			"/api.v1.PaymentService/GetCustomer":            false,
			"/api.v1.PaymentService/GetCustomerWithLogin":   true,
			"/api.v1.PaymentService/GetDefaultPrices":       false,
			"/api.v1.PaymentService/GetInvoices":            false,
			"/api.v1.PaymentService/GetOnboarded":           true,
			"/api.v1.PaymentService/GetSubscriptionUsage":   false,
			"/api.v1.PaymentService/HasChargeableResources": false,
			"/api.v1.PaymentService/HasPaymentMethod":       false,
			"/api.v1.PaymentService/RequestAdmission":       false,
			"/api.v1.PaymentService/SetOnboarded":           true,
			"/api.v1.ProjectService/Create":                 true,
			"/api.v1.ProjectService/Delete":                 true,
			"/api.v1.ProjectService/Get":                    false,
			"/api.v1.ProjectService/Invite":                 true,
			"/api.v1.ProjectService/InviteAccept":           true,
			"/api.v1.ProjectService/InviteDelete":           true,
			"/api.v1.ProjectService/InvitesList":            true,
			"/api.v1.ProjectService/List":                   false,
			"/api.v1.ProjectService/RemoveMember":           true,
			"/api.v1.ProjectService/Update":                 true,
			"/api.v1.SnapshotService/Delete":                true,
			"/api.v1.SnapshotService/Get":                   false,
			"/api.v1.SnapshotService/List":                  false,
			"/api.v1.TenantService/Create":                  true,
			"/api.v1.TenantService/CreateOrUpdate":          true,
			"/api.v1.TenantService/Delete":                  true,
			"/api.v1.TenantService/Get":                     false,
			"/api.v1.TenantService/Update":                  true,
			"/api.v1.TokenService/Create":                   true,
			"/api.v1.TokenService/List":                     true,
			"/api.v1.TokenService/Revoke":                   true,
			"/api.v1.VersionService/Get":                    false,
			"/api.v1.VolumeService/Delete":                  true,
			"/api.v1.VolumeService/Get":                     false,
			"/api.v1.VolumeService/List":                    false,
			"/status.v1.MessageService/List":                true,
			"/status.v1.StatusService/Get":                  true,
		},
	}
}
