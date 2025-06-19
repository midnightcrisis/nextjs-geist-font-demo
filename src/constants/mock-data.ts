import { MetricData, SecurityAlert, PipelineStatus, CodeQualityMetric, AIRecommendation } from '../types'

export const mockMetrics: MetricData[] = [
  {
    id: '1',
    name: 'Server Response Time',
    value: 245,
    change: -12,
    trend: 'down'
  },
  {
    id: '2',
    name: 'Error Rate',
    value: 0.8,
    change: 0.2,
    trend: 'up'
  },
  {
    id: '3',
    name: 'CPU Usage',
    value: 65,
    change: 5,
    trend: 'up'
  },
  {
    id: '4',
    name: 'Memory Usage',
    value: 78,
    change: -3,
    trend: 'down'
  }
]

export const mockSecurityAlerts: SecurityAlert[] = [
  {
    id: '1',
    severity: 'critical',
    description: 'Potential SQL injection vulnerability detected',
    timestamp: '2024-03-20T10:30:00Z',
    status: 'open'
  },
  {
    id: '2',
    severity: 'high',
    description: 'Outdated dependency with known vulnerabilities',
    timestamp: '2024-03-20T09:15:00Z',
    status: 'investigating'
  },
  {
    id: '3',
    severity: 'medium',
    description: 'Insecure configuration in production environment',
    timestamp: '2024-03-20T08:45:00Z',
    status: 'resolved'
  }
]

export const mockPipelines: PipelineStatus[] = [
  {
    id: '1',
    name: 'main-build',
    status: 'success',
    lastRun: '2024-03-20T11:00:00Z',
    duration: '5m 30s'
  },
  {
    id: '2',
    name: 'integration-tests',
    status: 'running',
    lastRun: '2024-03-20T11:05:00Z',
    duration: '3m 45s'
  },
  {
    id: '3',
    name: 'deployment',
    status: 'pending',
    lastRun: '2024-03-20T11:10:00Z',
    duration: '0s'
  }
]

export const mockCodeQuality: CodeQualityMetric[] = [
  {
    id: '1',
    name: 'Code Coverage',
    value: 87,
    threshold: 80,
    status: 'good'
  },
  {
    id: '2',
    name: 'Technical Debt',
    value: 12,
    threshold: 10,
    status: 'warning'
  },
  {
    id: '3',
    name: 'Duplicate Code',
    value: 4.5,
    threshold: 5,
    status: 'good'
  }
]

export const mockAIRecommendations: AIRecommendation[] = [
  {
    id: '1',
    type: 'security',
    description: 'Update authentication middleware to latest version',
    impact: 'high',
    suggestedAction: 'Run npm update @auth/core to version 2.0.0'
  },
  {
    id: '2',
    type: 'performance',
    description: 'Implement caching for frequently accessed API endpoints',
    impact: 'medium',
    suggestedAction: 'Add Redis caching layer for /api/metrics endpoint'
  },
  {
    id: '3',
    type: 'code-quality',
    description: 'Reduce complexity in UserService.ts',
    impact: 'medium',
    suggestedAction: 'Extract validation logic into separate middleware'
  }
]
