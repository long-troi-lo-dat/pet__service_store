import { toast } from 'react-toastify';

export const unLogin = () => toast.error('Vui lòng đăng nhập!!', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});
export const Notify = () => toast.success('Thêm vào giỏ hàng thành công', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});
export const IssetInCartNotify = () => toast.error('Thú cưng chỉ được thêm 1 sản phẩm', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});
export const quantityNotify = () => toast.error('Số lượng còn lại của sản phẩm không đủ', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});