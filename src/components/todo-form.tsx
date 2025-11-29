import { PlusIcon } from 'lucide-react'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { LoadingSwap } from './ui/loading-swap'

export function TodoForm({ todo }: { todo?: { name: string; id: string } }) {
  return (
    <form className="flex gap-2">
      <Input
        autoFocus
        placeholder="Enter your todo..."
        className="flex-1"
        aria-label="Name"
      />
      <Button type="submit">
        <LoadingSwap isLoading={false} className="flex gap-2 items-center">
          {todo == null ? (
            <>
              <PlusIcon /> Add
            </>
          ) : (
            'Update'
          )}
        </LoadingSwap>
      </Button>
    </form>
  )
}
