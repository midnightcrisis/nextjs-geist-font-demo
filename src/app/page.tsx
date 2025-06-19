"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  mockMetrics,
  mockSecurityAlerts,
  mockPipelines,
  mockCodeQuality,
  mockAIRecommendations
} from "@/constants/mock-data"

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">DevSecOps Dashboard</h1>
        <Badge variant="outline">Live</Badge>
      </div>

      <Tabs defaultValue="monitoring" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="pipelines">Pipelines</TabsTrigger>
          <TabsTrigger value="quality">Code Quality</TabsTrigger>
          <TabsTrigger value="ai">AI Insights</TabsTrigger>
        </TabsList>

        {/* Monitoring Tab */}
        <TabsContent value="monitoring" className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockMetrics.map((metric) => (
              <Card key={metric.id} className="p-4">
                <h3 className="font-medium text-sm text-muted-foreground">{metric.name}</h3>
                <div className="mt-2 flex items-baseline justify-between">
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <Badge variant={metric.trend === "up" ? "destructive" : "secondary"}>
                    {metric.change}%
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-4">
          <ScrollArea className="h-[400px]">
            {mockSecurityAlerts.map((alert) => (
              <Alert key={alert.id} className="mb-4">
                <AlertTitle className="flex items-center gap-2">
                  <Badge variant={alert.severity === "critical" ? "destructive" : "default"}>
                    {alert.severity}
                  </Badge>
                  {alert.status}
                </AlertTitle>
                <AlertDescription>{alert.description}</AlertDescription>
              </Alert>
            ))}
          </ScrollArea>
        </TabsContent>

        {/* Pipelines Tab */}
        <TabsContent value="pipelines">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pipeline</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Run</TableHead>
                <TableHead>Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPipelines.map((pipeline) => (
                <TableRow key={pipeline.id}>
                  <TableCell>{pipeline.name}</TableCell>
                  <TableCell>
                    <Badge variant={
                      pipeline.status === "success" ? "secondary" :
                      pipeline.status === "running" ? "default" :
                      "destructive"
                    }>
                      {pipeline.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(pipeline.lastRun).toLocaleString()}</TableCell>
                  <TableCell>{pipeline.duration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        {/* Code Quality Tab */}
        <TabsContent value="quality" className="space-y-4">
          {mockCodeQuality.map((metric) => (
            <Card key={metric.id} className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{metric.name}</h3>
                <Badge variant={metric.status === "good" ? "secondary" : "destructive"}>
                  {metric.status}
                </Badge>
              </div>
              <Progress value={(metric.value / metric.threshold) * 100} className="h-2" />
              <p className="text-sm text-muted-foreground mt-2">
                {metric.value}% / {metric.threshold}% threshold
              </p>
            </Card>
          ))}
        </TabsContent>

        {/* AI Insights Tab */}
        <TabsContent value="ai" className="space-y-4">
          {mockAIRecommendations.map((rec) => (
            <Card key={rec.id} className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={rec.impact === "high" ? "destructive" : "default"}>
                  {rec.type}
                </Badge>
                <Badge variant="outline">{rec.impact} impact</Badge>
              </div>
              <h3 className="font-medium mb-2">{rec.description}</h3>
              <p className="text-sm text-muted-foreground">{rec.suggestedAction}</p>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
