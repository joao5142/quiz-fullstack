import { AppError } from '~/exceptions/general/AppError'

export function useToast() {
  const { $toast } = useNuxtApp()

  function showToastSuccess(successMessage: string, timeout: number, onCloseCallback: Function) {
    $toast.success(successMessage, {
      autoClose: timeout || 1000,
      async onClose() {
        await onCloseCallback()
      },
    })
  }

  function showToastError(err: any, errorMessage: string, timeout?: number) {
    if (err instanceof AppError) {
      $toast.error(errorMessage + err.message, {
        autoClose: timeout || 2000,
      })
    } else {
      $toast.error('Error no servidor , tente novamente mais tarde', {
        autoClose: timeout ?? 2000,
      })
    }
  }

  return { showToastError, showToastSuccess }
}
