import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  Key, 
  Clock, 
  Users, 
  BarChart3, 
  AlertTriangle, 
  CheckCircle, 
  Target,
  TrendingUp,
  Lock,
  Zap,
  Database,
  Globe,
  Settings,
  FileText,
  Calendar,
  Star,
  ArrowRight,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface ExpandedSections {
  problem?: boolean;
  users?: boolean;
  business?: boolean;
  metrics?: boolean;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({});

  const toggleSection = (sectionId: keyof ExpandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const roadmapPhases = [
    {
      phase: "Days 1-30: Foundation",
      status: "planning",
      progress: 0,
      tasks: [
        "Development environment setup",
        "Database schema creation", 
        "Basic project structure",
        "CI/CD pipeline setup",
        "User authentication system",
        "Basic API endpoints",
        "Frontend foundation"
      ]
    },
    {
      phase: "Days 31-60: Core Features",
      status: "upcoming", 
      progress: 0,
      tasks: [
        "API key vault implementation",
        "Encryption and security layer",
        "Basic rotation mechanisms",
        "Dashboard development",
        "Integration APIs",
        "User testing preparation"
      ]
    },
    {
      phase: "Days 61-90: Launch Prep",
      status: "future",
      progress: 0, 
      tasks: [
        "Advanced rotation features",
        "Role-based access controls",
        "Analytics and monitoring",
        "Security audits",
        "Performance optimization",
        "Production deployment"
      ]
    }
  ];

  const features = [
    {
      name: "Secure API Key Vault",
      category: "Core",
      priority: "Must-Have",
      effort: "High",
      value: "Critical",
      description: "Encrypted storage for API keys with role-based access controls"
    },
    {
      name: "Automated Key Rotation",
      category: "Core", 
      priority: "Must-Have",
      effort: "High",
      value: "Critical",
      description: "Automated rotation of API keys based on schedules and policies"
    },
    {
      name: "Integration Dashboard",
      category: "Core",
      priority: "Must-Have", 
      effort: "Medium",
      value: "High",
      description: "Central dashboard for managing all API integrations and keys"
    },
    {
      name: "Usage Analytics",
      category: "Enhancement",
      priority: "Should-Have",
      effort: "Medium", 
      value: "Medium",
      description: "Analytics and insights on API key usage and security metrics"
    },
    {
      name: "Compliance Reporting",
      category: "Enhancement",
      priority: "Could-Have",
      effort: "Low",
      value: "Medium", 
      description: "Automated compliance reports for security audits"
    }
  ];

  const userStories = [
    {
      epic: "User Onboarding",
      story: "Account Creation",
      persona: "Developer",
      description: "As a developer, I want to create an account with my email so I can access the secure vault",
      acceptance: [
        "User can register with email/password",
        "Email verification required",
        "User profile created automatically",
        "Redirect to onboarding flow"
      ],
      effort: "5 points"
    },
    {
      epic: "Key Management", 
      story: "Store API Keys",
      persona: "Developer",
      description: "As a developer, I want to securely store my API keys so they're not exposed in my code",
      acceptance: [
        "Keys encrypted at rest",
        "Support for multiple key types",
        "Organized by service/project",
        "Easy copy/retrieve functionality"
      ],
      effort: "8 points"
    },
    {
      epic: "Automation",
      story: "Schedule Rotation",
      persona: "Security Admin", 
      description: "As a security admin, I want to schedule automatic key rotation so keys stay fresh",
      acceptance: [
        "Configurable rotation schedules",
        "Notification before rotation",
        "Rollback capability",
        "Integration with services APIs"
      ],
      effort: "13 points"
    }
  ];

  const technicalSpecs = [
    {
      category: "Security",
      requirements: [
        "AES-256 encryption for stored keys",
        "OAuth 2.0 + JWT authentication", 
        "Role-based access control (RBAC)",
        "Audit logging for all operations",
        "SOC 2 compliance preparation"
      ]
    },
    {
      category: "Performance",
      requirements: [
        "< 200ms API response time",
        "99.9% uptime SLA",
        "Support 10,000+ concurrent users",
        "Auto-scaling infrastructure",
        "Global CDN for low latency"
      ]
    },
    {
      category: "Integration",
      requirements: [
        "RESTful API with OpenAPI spec",
        "SDK for popular languages",
        "Webhook support for events",
        "Git repository scanning",
        "CI/CD pipeline integration"
      ]
    }
  ];

  const riskAssessment = [
    {
      type: "Technical",
      risk: "Security Vulnerabilities",
      probability: "Medium",
      impact: "High", 
      mitigation: "Regular security audits, penetration testing, bug bounty program"
    },
    {
      type: "Business",
      risk: "Slow User Adoption", 
      probability: "Medium",
      impact: "High",
      mitigation: "Free tier, developer advocacy, integration partnerships"
    },
    {
      type: "Technical",
      risk: "Scalability Issues",
      probability: "Low",
      impact: "Medium",
      mitigation: "Cloud-native architecture, load testing, monitoring"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '2rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem', color: 'white' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <Shield size={48} />
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: 0 }}>KeyGuard Vault</h1>
          </div>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
            Comprehensive Product Requirements Document for API Key Management Platform
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', padding: '4px' }}>
            <TabsTrigger value="roadmap" style={{ color: 'white', borderRadius: '8px' }}>90-Day Roadmap</TabsTrigger>
            <TabsTrigger value="features" style={{ color: 'white', borderRadius: '8px' }}>Feature Specs</TabsTrigger>
            <TabsTrigger value="prd" style={{ color: 'white', borderRadius: '8px' }}>Complete PRD</TabsTrigger>
            <TabsTrigger value="technical" style={{ color: 'white', borderRadius: '8px' }}>Technical Specs</TabsTrigger>
          </TabsList>

          {/* 90-Day Roadmap Tab */}
          <TabsContent value="roadmap">
            <div style={{ display: 'grid', gap: '2rem' }}>
              {/* Executive Summary */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Target className="h-5 w-5" />
                    Executive Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    <div>
                      <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Product Vision</h4>
                      <p style={{ color: '#666', marginBottom: '1rem' }}>
                        A developer-first API key management platform that eliminates security risks through automated rotation and centralized control.
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <Badge variant="outline">Security-First</Badge>
                        <Badge variant="outline">Developer-Friendly</Badge>
                        <Badge variant="outline">Automated</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Success Metrics</h4>
                      <ul style={{ color: '#666', paddingLeft: '1rem' }}>
                        <li>1,000+ developers signed up in Month 1</li>
                        <li>50+ integrations managed per user</li>
                        <li>95% key rotation success rate</li>
                        <li>$50K MRR by Month 3</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Roadmap Phases */}
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {roadmapPhases.map((phase, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <CardTitle style={{ fontSize: '1.25rem' }}>{phase.phase}</CardTitle>
                        <Badge 
                          variant={phase.status === 'planning' ? 'default' : phase.status === 'upcoming' ? 'secondary' : 'outline'}
                        >
                          {phase.status}
                        </Badge>
                      </div>
                      <Progress value={phase.progress} style={{ width: '100%' }} />
                    </CardHeader>
                    <CardContent>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                        {phase.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span style={{ fontSize: '0.875rem' }}>{task}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Risk Mitigation */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AlertTriangle className="h-5 w-5" />
                    Risk Assessment & Mitigation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {riskAssessment.map((risk, index) => (
                      <div key={index} style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                          <h4 style={{ fontWeight: '600' }}>{risk.risk}</h4>
                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <Badge variant="outline">{risk.type}</Badge>
                            <Badge variant={risk.probability === 'High' ? 'destructive' : risk.probability === 'Medium' ? 'secondary' : 'outline'}>
                              {risk.probability}
                            </Badge>
                          </div>
                        </div>
                        <p style={{ color: '#666', fontSize: '0.875rem' }}>{risk.mitigation}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Feature Specifications Tab */}
          <TabsContent value="features">
            <div style={{ display: 'grid', gap: '2rem' }}>
              {/* Feature Prioritization Matrix */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <BarChart3 className="h-5 w-5" />
                    Feature Prioritization Matrix
                  </CardTitle>
                  <CardDescription>
                    Features prioritized by user value and technical feasibility
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                          <th style={{ textAlign: 'left', padding: '0.75rem' }}>Feature</th>
                          <th style={{ textAlign: 'left', padding: '0.75rem' }}>Category</th>
                          <th style={{ textAlign: 'left', padding: '0.75rem' }}>Priority</th>
                          <th style={{ textAlign: 'left', padding: '0.75rem' }}>Effort</th>
                          <th style={{ textAlign: 'left', padding: '0.75rem' }}>User Value</th>
                          <th style={{ textAlign: 'left', padding: '0.75rem' }}>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {features.map((feature, index) => (
                          <tr key={index} style={{ borderBottom: '1px solid #e5e7eb' }}>
                            <td style={{ padding: '0.75rem', fontWeight: '600' }}>{feature.name}</td>
                            <td style={{ padding: '0.75rem' }}>
                              <Badge variant="outline">{feature.category}</Badge>
                            </td>
                            <td style={{ padding: '0.75rem' }}>
                              <Badge variant={feature.priority === 'Must-Have' ? 'default' : feature.priority === 'Should-Have' ? 'secondary' : 'outline'}>
                                {feature.priority}
                              </Badge>
                            </td>
                            <td style={{ padding: '0.75rem' }}>{feature.effort}</td>
                            <td style={{ padding: '0.75rem' }}>{feature.value}</td>
                            <td style={{ padding: '0.75rem', fontSize: '0.875rem', color: '#666' }}>{feature.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* User Stories */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Users className="h-5 w-5" />
                    Core User Stories
                  </CardTitle>
                  <CardDescription>
                    Detailed user stories with acceptance criteria
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {userStories.map((story, index) => (
                      <div key={index} style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                          <div>
                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                              <Badge>{story.epic}</Badge>
                              <Badge variant="outline">{story.persona}</Badge>
                            </div>
                            <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{story.story}</h4>
                            <p style={{ color: '#666', fontStyle: 'italic' }}>{story.description}</p>
                          </div>
                          <Badge variant="secondary">{story.effort}</Badge>
                        </div>
                        <div>
                          <h5 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Acceptance Criteria:</h5>
                          <ul style={{ paddingLeft: '1rem', color: '#666' }}>
                            {story.acceptance.map((criteria, criteriaIndex) => (
                              <li key={criteriaIndex} style={{ marginBottom: '0.25rem' }}>{criteria}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Complete PRD Tab */}
          <TabsContent value="prd">
            <div style={{ display: 'grid', gap: '2rem' }}>
              {/* PRD Header */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FileText className="h-5 w-5" />
                    Product Requirements Document
                  </CardTitle>
                  <CardDescription>
                    KeyGuard Vault - API Key Management Platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                      <strong>Product:</strong> KeyGuard Vault<br />
                      <strong>Owner:</strong> Product Team<br />
                      <strong>Status:</strong> <Badge>Draft</Badge><br />
                      <strong>Last Updated:</strong> 2025-01-09
                    </div>
                    <div>
                      <strong>Target Market:</strong> Developers & DevOps<br />
                      <strong>Market Size:</strong> $32.48B by 2032<br />
                      <strong>Competition:</strong> HashiCorp Vault, AWS Secrets<br />
                      <strong>Timeline:</strong> 90-day MVP
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Problem & Opportunity */}
              <Card>
                <CardHeader>
                  <Button
                    variant="ghost"
                    onClick={() => toggleSection('problem')}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0', fontSize: '1.125rem', fontWeight: '600' }}
                  >
                    {expandedSections.problem ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                    Problem Statement & Market Opportunity
                  </Button>
                </CardHeader>
                {expandedSections.problem && (
                  <CardContent>
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                      <div>
                        <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <AlertTriangle className="h-4 w-4 text-red-500" />
                          Critical Problems
                        </h4>
                        <ul style={{ paddingLeft: '1rem', color: '#666' }}>
                          <li>API keys scattered across codebases, configs, and environments</li>
                          <li>Manual key rotation is error-prone and time-consuming</li>
                          <li>Security breaches from stale or exposed credentials</li>
                          <li>Compliance challenges with key management auditing</li>
                          <li>No centralized visibility into API key usage</li>
                        </ul>
                      </div>
                      <div>
                        <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          Market Opportunity
                        </h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                          <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '6px' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#059669' }}>$32.48B</div>
                            <div style={{ fontSize: '0.875rem', color: '#666' }}>Market size by 2032</div>
                          </div>
                          <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '6px' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#059669' }}>24% CAGR</div>
                            <div style={{ fontSize: '0.875rem', color: '#666' }}>Annual growth rate</div>
                          </div>
                          <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '6px' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#059669' }}>9/10</div>
                            <div style={{ fontSize: '0.875rem', color: '#666' }}>Pain score intensity</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>

              {/* User Requirements */}
              <Card>
                <CardHeader>
                  <Button
                    variant="ghost"
                    onClick={() => toggleSection('users')}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0', fontSize: '1.125rem', fontWeight: '600' }}
                  >
                    {expandedSections.users ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                    User Requirements & Personas
                  </Button>
                </CardHeader>
                {expandedSections.users && (
                  <CardContent>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                      <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                        <h4 style={{ fontWeight: '600', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Users className="h-4 w-4" />
                          Primary: Full-Stack Developer
                        </h4>
                        <div style={{ fontSize: '0.875rem', color: '#666', lineHeight: '1.5' }}>
                          <strong>Demographics:</strong> 25-40 years, 3+ years experience<br />
                          <strong>Goals:</strong> Secure API integrations, reduce manual work<br />
                          <strong>Pain Points:</strong> Key rotation, security compliance<br />
                          <strong>Success Criteria:</strong> Zero exposed keys in code
                        </div>
                      </div>
                      <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                        <h4 style={{ fontWeight: '600', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Shield className="h-4 w-4" />
                          Secondary: Security Admin
                        </h4>
                        <div style={{ fontSize: '0.875rem', color: '#666', lineHeight: '1.5' }}>
                          <strong>Demographics:</strong> 30-50 years, security focus<br />
                          <strong>Goals:</strong> Enforce security policies, audit compliance<br />
                          <strong>Pain Points:</strong> Visibility, policy enforcement<br />
                          <strong>Success Criteria:</strong> Complete audit trail, automated compliance
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>

              {/* Business Model */}
              <Card>
                <CardHeader>
                  <Button
                    variant="ghost"
                    onClick={() => toggleSection('business')}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0', fontSize: '1.125rem', fontWeight: '600' }}
                  >
                    {expandedSections.business ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                    Business Model & Revenue Strategy
                  </Button>
                </CardHeader>
                {expandedSections.business && (
                  <CardContent>
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        <div style={{ padding: '1rem', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px' }}>
                          <h5 style={{ fontWeight: '600', color: '#059669', marginBottom: '0.5rem' }}>Free Tier</h5>
                          <div style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>$0</div>
                          <div style={{ fontSize: '0.875rem', color: '#666' }}>
                            Basic vault, up to 10 keys, manual rotation
                          </div>
                        </div>
                        <div style={{ padding: '1rem', background: '#eff6ff', border: '1px solid #93c5fd', borderRadius: '8px' }}>
                          <h5 style={{ fontWeight: '600', color: '#2563eb', marginBottom: '0.5rem' }}>Pro Tier</h5>
                          <div style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>$15/user/mo</div>
                          <div style={{ fontSize: '0.875rem', color: '#666' }}>
                            Automated rotation, unlimited keys, team features
                          </div>
                        </div>
                        <div style={{ padding: '1rem', background: '#fefce8', border: '1px solid #fde047', borderRadius: '8px' }}>
                          <h5 style={{ fontWeight: '600', color: '#ca8a04', marginBottom: '0.5rem' }}>Enterprise</h5>
                          <div style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>$5,000/mo</div>
                          <div style={{ fontSize: '0.875rem', color: '#666' }}>
                            Custom integrations, compliance, dedicated support
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Revenue Projections</h4>
                        <div style={{ fontSize: '0.875rem', color: '#666' }}>
                          <strong>Year 1:</strong> $500K ARR (1,000 free users → 100 paid conversions)<br />
                          <strong>Year 2:</strong> $2.5M ARR (50% growth, enterprise uptake)<br />
                          <strong>Year 3:</strong> $10M ARR (market expansion, features)
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>

              {/* Success Metrics */}
              <Card>
                <CardHeader>
                  <Button
                    variant="ghost"
                    onClick={() => toggleSection('metrics')}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0', fontSize: '1.125rem', fontWeight: '600' }}
                  >
                    {expandedSections.metrics ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                    Success Metrics & KPIs
                  </Button>
                </CardHeader>
                {expandedSections.metrics && (
                  <CardContent>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                      <div>
                        <h4 style={{ fontWeight: '600', marginBottom: '1rem', color: '#059669' }}>User Acquisition</h4>
                        <ul style={{ paddingLeft: '1rem', color: '#666', fontSize: '0.875rem' }}>
                          <li>1,000 signups in Month 1</li>
                          <li>5,000 MAU by Month 6</li>
                          <li>10% free-to-paid conversion</li>
                          <li>$200 Customer Acquisition Cost</li>
                        </ul>
                      </div>
                      <div>
                        <h4 style={{ fontWeight: '600', marginBottom: '1rem', color: '#2563eb' }}>Product Engagement</h4>
                        <ul style={{ paddingLeft: '1rem', color: '#666', fontSize: '0.875rem' }}>
                          <li>50+ API keys managed per user</li>
                          <li>Daily active usage by 60% of users</li>
                          <li>95% key rotation success rate</li>
                          <li>&lt; 2 minutes average task completion</li>
                        </ul>
                      </div>
                      <div>
                        <h4 style={{ fontWeight: '600', marginBottom: '1rem', color: '#dc2626' }}>Business Impact</h4>
                        <ul style={{ paddingLeft: '1rem', color: '#666', fontSize: '0.875rem' }}>
                          <li>$50K MRR by Month 3</li>
                          <li>&lt; 5% monthly churn rate</li>
                          <li>Net Promoter Score &gt; 50</li>
                          <li>15% enterprise conversion rate</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>
          </TabsContent>

          {/* Technical Specifications Tab */}
          <TabsContent value="technical">
            <div style={{ display: 'grid', gap: '2rem' }}>
              {/* Architecture Overview */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Database className="h-5 w-5" />
                    System Architecture
                  </CardTitle>
                  <CardDescription>
                    High-level technical architecture and technology stack
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                      <h4 style={{ fontWeight: '600', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Globe className="h-4 w-4" />
                        Frontend Stack
                      </h4>
                      <ul style={{ paddingLeft: '1rem', color: '#666', fontSize: '0.875rem' }}>
                        <li>React 18 + TypeScript</li>
                        <li>Next.js for SSR/SSG</li>
                        <li>Vanilla CSS for styling</li>
                        <li>React Query for state management</li>
                        <li>Vercel for deployment</li>
                      </ul>
                    </div>
                    <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                      <h4 style={{ fontWeight: '600', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Database className="h-4 w-4" />
                        Backend Stack
                      </h4>
                      <ul style={{ paddingLeft: '1rem', color: '#666', fontSize: '0.875rem' }}>
                        <li>Node.js + Express/Fastify</li>
                        <li>PostgreSQL with encryption</li>
                        <li>Redis for caching</li>
                        <li>JWT + OAuth2 authentication</li>
                        <li>AWS/GCP for hosting</li>
                      </ul>
                    </div>
                    <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                      <h4 style={{ fontWeight: '600', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Lock className="h-4 w-4" />
                        Security Stack
                      </h4>
                      <ul style={{ paddingLeft: '1rem', color: '#666', fontSize: '0.875rem' }}>
                        <li>AES-256 encryption at rest</li>
                        <li>TLS 1.3 for data in transit</li>
                        <li>HashiCorp Vault integration</li>
                        <li>Role-based access control</li>
                        <li>Audit logging & monitoring</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technical Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Settings className="h-5 w-5" />
                    Technical Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {technicalSpecs.map((spec, index) => (
                      <div key={index} style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                        <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{spec.category} Requirements</h4>
                        <ul style={{ paddingLeft: '1rem', color: '#666', fontSize: '0.875rem' }}>
                          {spec.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} style={{ marginBottom: '0.25rem' }}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* API Specifications */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Zap className="h-5 w-5" />
                    API Specifications
                  </CardTitle>
                  <CardDescription>
                    RESTful API endpoints and data structures
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                      <h5 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Core Endpoints</h5>
                      <div style={{ display: 'grid', gap: '0.5rem' }}>
                        <div style={{ border: '1px solid #cbd5e1', borderRadius: '4px', padding: '0.75rem' }}>
                          <p style={{ fontFamily: 'monospace', fontSize: '0.875rem', marginBottom: '0.25rem' }}>POST /api/keys</p>
                          <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Create new API key entry with encryption</p>
                        </div>
                        <div style={{ border: '1px solid #cbd5e1', borderRadius: '4px', padding: '0.75rem' }}>
                          <p style={{ fontFamily: 'monospace', fontSize: '0.875rem', marginBottom: '0.25rem' }}>GET /api/keys/id/rotate</p>
                          <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Trigger key rotation with validation</p>
                        </div>
                        <div style={{ border: '1px solid #cbd5e1', borderRadius: '4px', padding: '0.75rem' }}>
                          <p style={{ fontFamily: 'monospace', fontSize: '0.875rem', marginBottom: '0.25rem' }}>PUT /api/keys/id/schedule</p>
                          <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Configure automated rotation schedule</p>
                        </div>
                      </div>
                    </div>
                    <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                      <h5 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Data Models</h5>
                      <div style={{ fontFamily: 'monospace', fontSize: '0.875rem', color: '#475569', background: 'white', padding: '1rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}>
                        {`{
  "apiKey": {
    "id": "uuid",
    "name": "string",
    "service": "string", 
    "encrypted_value": "string",
    "rotation_schedule": "cron",
    "last_rotated": "timestamp",
    "created_by": "user_id",
    "permissions": ["read", "rotate"]
  }
}`}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Implementation Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar className="h-5 w-5" />
                    Implementation Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      { phase: "Sprint 1-2 (Weeks 1-4)", tasks: ["Database design & setup", "Authentication system", "Basic CRUD APIs", "Frontend scaffolding"] },
                      { phase: "Sprint 3-4 (Weeks 5-8)", tasks: ["Encryption implementation", "Key rotation logic", "Dashboard UI", "Integration testing"] },
                      { phase: "Sprint 5-6 (Weeks 9-12)", tasks: ["Automated scheduling", "Role-based permissions", "Analytics & monitoring", "Security audit"] }
                    ].map((sprint, index) => (
                      <div key={index} style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                        <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{sprint.phase}</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
                          {sprint.tasks.map((task, taskIndex) => (
                            <div key={taskIndex} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', background: '#f1f5f9', borderRadius: '4px' }}>
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              <span style={{ fontSize: '0.75rem' }}>{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            Ready to Build the Future of API Security?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
            This comprehensive PRD provides the blueprint for creating a market-leading API key management platform.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Button style={{ background: 'white', color: '#667eea' }}>
              Start Development
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" style={{ borderColor: 'white', color: 'white' }}>
              Review Specifications
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
