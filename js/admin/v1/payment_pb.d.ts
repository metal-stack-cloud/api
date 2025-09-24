import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { PaymentCustomer } from "../../api/v1/payment_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file admin/v1/payment.proto.
 */
export declare const file_admin_v1_payment: GenFile;
/**
 * PaymentServiceAddBalanceToCustomerRequest is the request payload for the balance to customer request
 *
 * @generated from message admin.v1.PaymentServiceAddBalanceToCustomerRequest
 */
export type PaymentServiceAddBalanceToCustomerRequest = Message<"admin.v1.PaymentServiceAddBalanceToCustomerRequest"> & {
    /**
     * Tenant is the tenant
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * BalanceToAdd is the balance in euro cent which should be added to the customer
     *
     * @generated from field: uint64 balance_to_add = 2;
     */
    balanceToAdd: bigint;
};
/**
 * Describes the message admin.v1.PaymentServiceAddBalanceToCustomerRequest.
 * Use `create(PaymentServiceAddBalanceToCustomerRequestSchema)` to create a new message.
 */
export declare const PaymentServiceAddBalanceToCustomerRequestSchema: GenMessage<PaymentServiceAddBalanceToCustomerRequest>;
/**
 * PaymentServiceAddBalanceToCustomerResponse is the response payload for the balance to customer request
 *
 * @generated from message admin.v1.PaymentServiceAddBalanceToCustomerResponse
 */
export type PaymentServiceAddBalanceToCustomerResponse = Message<"admin.v1.PaymentServiceAddBalanceToCustomerResponse"> & {
    /**
     * Customer is the customer
     *
     * @generated from field: api.v1.PaymentCustomer customer = 1;
     */
    customer?: PaymentCustomer;
};
/**
 * Describes the message admin.v1.PaymentServiceAddBalanceToCustomerResponse.
 * Use `create(PaymentServiceAddBalanceToCustomerResponseSchema)` to create a new message.
 */
export declare const PaymentServiceAddBalanceToCustomerResponseSchema: GenMessage<PaymentServiceAddBalanceToCustomerResponse>;
/**
 * PaymentService serves payment related functions
 *
 * @generated from service admin.v1.PaymentService
 */
export declare const PaymentService: GenService<{
    /**
     * AddBalanceToCustomer adds balance to a customer
     *
     * @generated from rpc admin.v1.PaymentService.AddBalanceToCustomer
     */
    addBalanceToCustomer: {
        methodKind: "unary";
        input: typeof PaymentServiceAddBalanceToCustomerRequestSchema;
        output: typeof PaymentServiceAddBalanceToCustomerResponseSchema;
    };
}>;
