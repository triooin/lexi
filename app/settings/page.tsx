"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Settings, Bell, Shield, User } from "lucide-react"
import { toast } from "sonner"

export default function SettingsPage() {
  const handleSave = () => {
    toast.success("Settings saved successfully", {
      description: "Your profile information has been updated.",
    })
  }

  const handleToggle = (setting: string) => {
    toast("Setting updated", {
      description: `${setting} has been updated.`,
    })
  }

  return (
    <div className="flex-1 space-y-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      </div>
      <p className="text-muted-foreground">
        Manage your account settings and preferences.
      </p>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Profile Settings
            </CardTitle>
            <CardDescription>Update your personal information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Display Name</Label>
              <Input id="name" defaultValue="Legal Scholar" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="scholar@example.com" />
            </div>
            <Button onClick={handleSave}>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Notifications
            </CardTitle>
            <CardDescription>Configure how you receive updates.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive emails about new acts and major amendments.</p>
              </div>
              <Switch defaultChecked onCheckedChange={() => handleToggle("Email Notifications")} />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Weekly Digest</Label>
                <p className="text-sm text-muted-foreground">Receive a weekly summary of legal updates.</p>
              </div>
              <Switch onCheckedChange={() => handleToggle("Weekly Digest")} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Privacy & Security
            </CardTitle>
            <CardDescription>Manage your privacy preferences.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Analytics Tracking</Label>
                <p className="text-sm text-muted-foreground">Allow us to collect anonymous usage data to improve Lexi.</p>
              </div>
              <Switch defaultChecked onCheckedChange={() => handleToggle("Analytics Tracking")} />
            </div>
            <Button variant="outline" className="text-destructive border-destructive hover:bg-destructive/10" onClick={() => toast.error("Account deletion is disabled in demo mode.")}>Delete Account</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
