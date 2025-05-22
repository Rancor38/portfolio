// Export skills data to be used in Resume component
// This file extracts the skills information from the Skills component

// Languages
export const languagesSkills = [
    { name: "JavaScript", category: "language" },
    { name: "TypeScript", category: "language" },
    { name: "HTML5", category: "language" },
    { name: "CSS3", category: "language" },
    { name: "Python", category: "language" },
    { name: "PHP", category: "language" },
    { name: "SQL", category: "language" },
    { name: "Bash", category: "language" },
]

// Frameworks and tools
export const frameworksAndTools = [
    { name: "React", category: "framework" },
    { name: "Node.js", category: "framework" },
    { name: "Express", category: "framework" },
    { name: "Next.js", category: "framework" },
    { name: "Django", category: "framework" },
    { name: "Flask", category: "framework" },
    { name: "Tailwind CSS", category: "framework" },
    { name: "Bulma CSS", category: "framework" },
    { name: "Framer Motion", category: "framework" },
    { name: "Electron", category: "framework" },
    { name: "Vite", category: "framework" },
    { name: "AWS CDK", category: "tool" },
    { name: "MongoDB", category: "database" },
    { name: "PostgreSQL", category: "database" },
    { name: "Amazon RDS", category: "database" },
    { name: "Amazon DynamoDB", category: "database" },
    { name: "Amazon Timestream", category: "database" },
    { name: "Aurora", category: "database" },
    { name: "SQLite", category: "database" },
    { name: "Git", category: "tool" },
    { name: "GitHub", category: "tool" },
    { name: "VS Code", category: "tool" },
    { name: "Postman", category: "tool" },
    { name: "Jira", category: "tool" },
    { name: "Slack", category: "tool" },
    { name: "Trello", category: "tool" },
    { name: "Notion", category: "tool" },
    { name: "Microsoft Office 365", category: "tool" },
    { name: "Amazon S3", category: "aws" },
    { name: "AWS Lambda", category: "aws" },
    { name: "API Gateway", category: "aws" },
    { name: "IAM", category: "aws" },
    { name: "CloudWatch", category: "aws" },
    { name: "CloudFormation", category: "aws" },
    { name: "Secrets Manager", category: "aws" },
    { name: "SNS", category: "aws" },
    { name: "SQS", category: "aws" },
    { name: "EC2", category: "aws" },
    { name: "ECS", category: "aws" },
    { name: "IoT Core", category: "aws" },
    { name: "Glue", category: "aws" },
    { name: "SSM", category: "aws" },
    { name: "CodeBuild", category: "aws" },
    { name: "CodeCommit", category: "aws" },
    { name: "CodeDeploy", category: "aws" },
    { name: "CodePipeline", category: "aws" },
    { name: "Step Functions", category: "aws" },
    { name: "QuickSight", category: "aws" },
]

// Combine all skills in one array
export const allSkills = [...languagesSkills, ...frameworksAndTools]

export default allSkills
