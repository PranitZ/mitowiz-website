'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { CheckIcon, CircleIcon, LoaderIcon } from './icons'

type Status = 'running' | 'processing' | 'completed' | 'queued'

const workers: {
  worker: string
  task: string
  detail: string
  status: Status
}[] = [
  {
    worker: 'AI Worker 01',
    task: 'Prior Authorization',
    detail: 'Submitting request · Availity',
    status: 'running',
  },
  {
    worker: 'AI Worker 08',
    task: 'Eligibility Verification',
    detail: 'Coverage details ready for review',
    status: 'completed',
  },
  {
    worker: 'AI Worker 15',
    task: 'Claim Status',
    detail: 'Checking 28 claims · UHC portal',
    status: 'processing',
  },
  {
    worker: 'AI Worker 23',
    task: 'Appeals & Follow-ups',
    detail: 'Next batch · 14 claims',
    status: 'queued',
  },
]

const statusLabel: Record<Status, string> = {
  running: 'Running',
  processing: 'Processing',
  completed: 'Completed',
  queued: 'Queued',
}

function Spinner() {
  const reduceMotion = useReducedMotion()
  if (reduceMotion) return <LoaderIcon className="h-4 w-4" />
  return (
    <motion.span
      animate={{ rotate: 360 }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
      className="flex"
    >
      <LoaderIcon className="h-4 w-4" />
    </motion.span>
  )
}

function WorkerAvatar({ status, index }: { status: Status; index: number }) {
  const active = status === 'running' || status === 'processing'
  return (
    <span
      aria-hidden
      className={`relative flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px] border font-mono text-[10.5px] font-semibold tracking-wide ${
        active
          ? 'border-accent-line bg-accent-dim text-accent-soft'
          : 'border-line bg-white/[0.04] text-secondary'
      }`}
    >
      {String(index).padStart(2, '0')}
      {active && (
        <span className="absolute -right-[3px] -top-[3px] h-[9px] w-[9px] rounded-full border-2 border-card bg-accent" />
      )}
    </span>
  )
}

function StatusPill({ status }: { status: Status }) {
  if (status === 'running' || status === 'processing') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-line bg-accent-dim px-2.5 py-1.5 font-mono text-[11.5px] tracking-wide text-accent-soft">
        <span className="h-[5px] w-[5px] animate-pulse-soft rounded-full bg-accent" />
        {statusLabel[status]}
      </span>
    )
  }
  if (status === 'completed') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1.5 font-mono text-[11.5px] tracking-wide text-secondary">
        <CheckIcon className="h-3 w-3 text-success" />
        {statusLabel[status]}
      </span>
    )
  }
  return (
    <span className="inline-flex items-center rounded-full border border-line px-2.5 py-1.5 font-mono text-[11.5px] tracking-wide text-tertiary">
      {statusLabel[status]}
    </span>
  )
}

function RowIndicator({ status }: { status: Status }) {
  if (status === 'completed') return <CheckIcon className="h-3.5 w-3.5 text-success" />
  if (status === 'queued') return <CircleIcon className="h-3.5 w-3.5 text-tertiary" />
  return (
    <span className="text-accent-soft">
      <Spinner />
    </span>
  )
}

/**
 * Signature hero visual: a live view of AI workers executing
 * payer workflows — the product's core "AI Workforce" positioning.
 */
export function DashboardMockup() {
  const workerIndex = (worker: string) => Number(worker.replace(/\D/g, ''))

  return (
    <div className="relative" role="img" aria-label="MitoWiz AI Workforce dashboard showing AI workers processing prior authorizations, eligibility verification, claim status checks, and appeals">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-14 rounded-full bg-[radial-gradient(circle_at_70%_20%,rgba(109,94,245,0.16),transparent_60%)] blur-3xl"
      />
      <div className="relative rounded-xl3 border border-line bg-gradient-to-b from-card to-surface p-[22px] shadow-dash ring-1 ring-white/[0.04]">
        {/* Header */}
        <div className="mb-3.5 flex items-center justify-between border-b border-line px-1.5 pb-[18px] pt-1">
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden
              className="h-[7px] w-[7px] animate-pulse-soft rounded-full bg-accent shadow-[0_0_0_3px_rgba(109,94,245,0.14)]"
            />
            <span className="text-[14.5px] font-semibold tracking-tight">AI Workforce</span>
          </div>
          <span className="font-mono text-[11px] tracking-wide text-tertiary">WORKFLOW VIEW</span>
        </div>

        {/* Worker rows */}
        <div className="flex flex-col gap-1.5">
          {workers.map((row) => (
            <div
              key={row.worker}
              className={`flex items-center justify-between gap-3 rounded-[14px] px-2.5 py-3 transition-colors hover:bg-white/[0.025] ${
                row.status === 'queued' ? 'opacity-55' : ''
              }`}
            >
              <div className="flex min-w-0 items-center gap-3.5">
                <WorkerAvatar status={row.status} index={workerIndex(row.worker)} />
                <div className="flex min-w-0 flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-pretty text-[14px] font-medium leading-snug text-foreground">
                      {row.task}
                    </span>
                    <span aria-hidden className="hidden sm:flex">
                      <RowIndicator status={row.status} />
                    </span>
                  </div>
                  <span className="truncate font-mono text-[11px] tracking-wide text-tertiary">
                    {row.worker} · {row.detail}
                  </span>
                </div>
              </div>
              <StatusPill status={row.status} />
            </div>
          ))}
        </div>

        {/* Footer stats */}
        <div className="mt-4 flex items-center justify-between gap-4 border-t border-line pt-3.5">
          <span className="font-mono text-[11px] tracking-wide text-tertiary">
            HUMAN-REVIEWED WORKFLOW
          </span>
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[11px] tracking-wide text-tertiary">CAPACITY</span>
            <div className="h-1 w-20 overflow-hidden rounded-full bg-white/[0.06]">
              <div className="h-full w-[68%] rounded-full bg-accent" />
            </div>
            <span className="font-mono text-[11px] tracking-wide text-secondary">68%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
