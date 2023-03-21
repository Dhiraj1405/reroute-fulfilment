export default interface UserState {
    token: string;
    current: object | null;
    instanceUrl: string;
    deliveryMethod: string;
    allowDeliveryMethodUpdate: boolean;
    allowDeliveryAddressUpdate: boolean;
    allowPickupUpdate: boolean;
    allowCancel: boolean;
}