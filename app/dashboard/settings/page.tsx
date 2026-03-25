"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function SettingsPage() {
  const [name, setName] = useState("John Doe");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — would call API
  };

  const handlePasswordSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — would call API
  };

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold text-white font-heading">
          Account Settings
        </h1>
        <p className="mt-1 text-gray-400">
          Manage your profile, password, and billing preferences.
        </p>
      </div>

      {/* Profile Section */}
      <Card>
        <h2 className="text-lg font-semibold text-white font-heading mb-4">
          Profile Information
        </h2>
        <form onSubmit={handleProfileSave} className="space-y-4">
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            value="john@example.com"
            readOnly
            className="opacity-60 cursor-not-allowed"
          />
          <Button type="submit" size="sm">
            Save Profile
          </Button>
        </form>
      </Card>

      {/* Password Section */}
      <Card>
        <h2 className="text-lg font-semibold text-white font-heading mb-4">
          Change Password
        </h2>
        <form onSubmit={handlePasswordSave} className="space-y-4">
          <Input
            label="Current Password"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Enter current password"
          />
          <Input
            label="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
          />
          <Input
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
          />
          <Button type="submit" size="sm">
            Update Password
          </Button>
        </form>
      </Card>

      {/* Billing Section */}
      <Card>
        <h2 className="text-lg font-semibold text-white font-heading mb-4">
          Billing
        </h2>
        <p className="text-sm text-gray-400 mb-4">
          Manage your payment methods and billing information through our secure
          billing portal.
        </p>
        <Button variant="outline">Manage Billing</Button>
      </Card>
    </div>
  );
}
