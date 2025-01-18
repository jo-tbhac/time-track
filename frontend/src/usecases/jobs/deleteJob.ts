import { DeleteJob } from '@wails/go/main/App'

const deleteJob = async (id: number): Promise<void> => {
  await DeleteJob(id)
}

export default deleteJob
