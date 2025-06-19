export interface MetricData {
  id: string
  name: string
  value: number
  change: number
  trend: 'up' | 'down' | 'neutral'
}

export interface SecurityAlert {
  id: string
  severity: 'critical' | 'high' | 'medium' | 'low'
  description: string
  timestamp: string
  status: 'open' | 'investigating' | 'resolved'
}

export interface PipelineStatus {
  id: string
  name: string
  status: 'running' | 'success' | 'failed' | 'pending'
  lastRun: string
  duration: string
}

export interface CodeQualityMetric {
  id: string
  name: string
  value: number
  threshold: number
  status: 'good' | 'warning' | 'critical'
}

export interface AIRecommendation {
  id: string
  type: 'security' | 'performance' | 'code-quality'
  description: string
  impact: 'high' | 'medium' | 'low'
  suggestedAction: string
}
