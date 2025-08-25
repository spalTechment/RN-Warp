# React Native Cursor Rules Documentation

## 📋 Overview

This directory contains comprehensive coding rules and standards for React Native TypeScript projects using Cursor AI. These rules ensure consistent, secure, and maintainable code across your React Native applications.

## 🏗️ Architecture

The rules are organized into logical categories:

```
.cursor/rules/
├── README.md                           # This documentation
├── security/                           # Security standards
│   └── security.mdc                    # Security best practices
├── task_completion_enforcement.mdc     # Quality assurance
├── global/                             # Project-wide standards
├── navigation/                         # Navigation patterns
├── network/                            # API and networking
├── database/                           # Data layer patterns
├── test/                               # Testing standards
│   ├── unit-testing.mdc               # Unit testing rules
│   ├── ui-testing.mdc                 # UI/E2E testing rules
│   └── README.md                      # Testing documentation
└── ui/                                 # UI/UX standards
```

## 🚀 Quick Start

### For New Developers
1. **Read this README** to understand the rule structure
2. **Review global standards** in `global/` directory
3. **Check security rules** in `security/security.mdc`
4. **Follow navigation patterns** in `navigation/` directory
5. **Use API patterns** in `network/` directory
6. **Implement testing standards** in `test/` directory

### For Existing Projects
1. **Audit current code** against these rules
2. **Implement missing patterns** gradually
3. **Update existing components** to follow standards
4. **Add security measures** from `security/security.mdc`
5. **Add comprehensive testing** from `test/` directory

## 📚 Rule Categories

### 🔒 Security Rules (`security/security.mdc`)
**Priority: HIGH** | **Always Apply: False** | **Apply When: Security-critical scenarios**

Comprehensive security framework covering:
- **Authentication & Authorization**
- **Data Protection & Privacy**
- **API Security**
- **Input Validation & Sanitization**
- **Mobile-Specific Security**
- **Code Security**
- **Network Security**
- **Error Handling & Logging**
- **Testing & Validation**
- **Configuration Security**
- **Incident Response**
- **Compliance & Legal**

**Key Features:**
- OWASP guidelines compliance
- Mobile-specific security patterns
- Real-world code examples (✅ correct vs ❌ wrong)
- Implementation checklists
- Emergency procedures

**Target Files:**
```yaml
- "**/auth/**/*.ts"
- "**/api/**/*.ts"
- "**/screens/**/Login*.tsx"
- "**/components/**/*Form*.tsx"
- "**/services/**/*.ts"
```

### 🎯 Task Completion Enforcement (`task_completion_enforcement.mdc`)
**Priority: HIGH** | **Always Apply: True** | **Apply When: All development tasks**

Ensures complete, functional implementations:
- **Functional Completeness**: Components render, handle all states
- **Integration Completeness**: Proper imports and usage
- **Error Handling Completeness**: All error scenarios covered
- **Testing Completeness**: Testable and functional code

**Quality Gates:**
- ✅ Compiles without errors
- ✅ Renders without crashes
- ✅ Handles all expected states
- ✅ Integrates with existing code
- ✅ Follows project conventions

### 🌐 Global Rules (`global/`)

#### Project Standards (`project-standards.mdc`)
Configuration-driven architecture standards:
- File structure adherence
- Import organization
- Code quality standards
- Configuration integration

#### Coding Standards (`coding-standards.mdc`)
General coding conventions:
- Naming conventions
- Function design
- Error handling
- Performance guidelines
- Comments and documentation

#### App Root Setup (`app-root-setup.mdc`)
Mandatory provider hierarchy:
```typescript
<SafeAreaProvider>
  <ErrorBoundary>
    <StateManagementProvider>
      <QueryProvider>
        <ThemeProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </QueryProvider>
    </StateManagementProvider>
  </ErrorBoundary>
</SafeAreaProvider>
```

#### Screen Flow Code Generation (`screen-flow-code-generation.mdc`)
Automatic screen navigation flow generation based on configuration.

#### Screen Transition Flow (`screen-transition-flow.mdc`)
Configuration-driven screen transition patterns.

### 🧭 Navigation Rules (`navigation/`)

#### Basic Setup (`basic-setup.mdc`)
Fundamental navigation configuration and setup.

#### Drawer Navigation (`drawer-navigation.mdc`)
Drawer navigation patterns and best practices.

#### Bottom Tabs (`bottom-tabs.mdc`)
Bottom tab navigation implementation.

#### Combined Navigation (`combined-navigation.mdc`)
Complex navigation patterns combining multiple navigation types.

#### Auth Bottom Tab (`auth-bottom-tab.mdc`)
Authentication-aware bottom tab navigation.

#### Auth Drawer (`auth-drawer.mdc`)
Authentication-aware drawer navigation.

#### Troubleshooting (`troubleshooting.mdc`)
Common navigation issues and solutions.

### 🌐 Network Rules (`network/`)

#### API Layer (`api-layer.mdc`)
Configuration-driven API implementation:
- **Resource segregation**: Organize by resource (Pet, User, Store)
- **HTTP client setup**: Based on `config.architecture.httpClient`
- **Type safety**: Full TypeScript integration
- **Error handling**: Global error management
- **Environment switching**: Multiple environment support

**Directory Structure:**
```
src/api/
├── clients/          # HTTP client setup
├── endpoints/        # Resource-specific endpoints
├── hooks/           # Resource-specific hooks
├── services/        # Resource-specific services
├── models/          # TypeScript interfaces
├── utils/           # API utilities
└── index.ts         # Barrel exports
```

### 🗄️ Database Rules (`database/`)

#### DB Layer (`db-layer.mdc`)
Local database layer implementation:
- **Configuration-driven**: Uses project configuration
- **Resource segregation**: Separate models per resource
- **Schema management**: Type-safe schema definitions
- **Sync logic**: Offline-first with sync capabilities
- **Offline persistence**: Robust offline data handling

### 🎨 UI Rules (`ui/`)

#### UI Design Standard (`ui-design-standard.mdc`)
Configuration-driven design system:
- **Design tokens**: Colors, spacing, typography from config
- **Component standards**: Consistent component patterns
- **Theming system**: Dynamic theme support
- **Responsive design**: Mobile-first responsive patterns

### 🧪 Testing Rules (`test/`)

#### Unit Testing (`unit-testing.mdc`)
Comprehensive unit testing standards:
- **Component Testing**: React Native Testing Library integration
- **Hook Testing**: Custom hook testing with renderHook
- **API/Service Testing**: Proper mocking strategies
- **Utility Testing**: Edge cases and error scenarios
- **Coverage Requirements**: 80%+ overall, 90%+ critical logic

#### UI Testing (`ui-testing.mdc`)
End-to-end and UI testing standards:
- **E2E Testing**: Detox framework for complete user journeys
- **Integration Testing**: Component interaction testing
- **Accessibility Testing**: Screen reader and keyboard navigation
- **Visual Testing**: Regression testing with snapshots
- **Cross-Platform Testing**: iOS and Android compatibility

## 🔧 Rule Configuration

### Metadata Structure
Each rule file follows this metadata format:
```yaml
---
description: Rule description
rule_type: [CATEGORY1, CATEGORY2]
priority: HIGH|MEDIUM|LOW
globs:
  - "target file patterns"
exclude_patterns:
  - "excluded patterns"
alwaysApply: true|false
applyWhen:
  - "specific scenarios"
---
```

### Rule Types
- **SECURITY_ENFORCEMENT**: Security-critical rules
- **BEST_PRACTICES**: Industry standards
- **COMPLIANCE**: Legal and regulatory requirements
- **MOBILE_SECURITY**: React Native specific security
- **ARCHITECTURE_ENFORCEMENT**: Structural patterns
- **CONFIG_DRIVEN**: Configuration-based rules
- **QUALITY_ASSURANCE**: Code quality standards
- **TASK_COMPLETION**: Implementation completeness

### Priority Levels
- **HIGH**: Critical rules that must be followed
- **MEDIUM**: Important rules for best practices
- **LOW**: Optional improvements and suggestions

## 📋 Implementation Checklist

### For New Projects
- [ ] Review all global standards
- [ ] Implement security rules
- [ ] Set up navigation patterns
- [ ] Configure API layer
- [ ] Set up database layer
- [ ] Implement UI design system
- [ ] Add comprehensive testing
- [ ] Add task completion enforcement

### For Existing Projects
- [ ] Audit current code against rules
- [ ] Prioritize security improvements
- [ ] Update navigation patterns
- [ ] Refactor API layer
- [ ] Implement missing patterns
- [ ] Add comprehensive testing
- [ ] Improve test coverage

### Security Audit
- [ ] Authentication flows secure
- [ ] Data encryption implemented
- [ ] Input validation in place
- [ ] API security measures active
- [ ] Error handling secure
- [ ] Privacy compliance verified

## 🛠️ Usage Examples

### Creating a New Screen
1. **Follow navigation patterns** from `navigation/` directory
2. **Implement security measures** from `security.mdc`
3. **Use UI design standards** from `ui/` directory
4. **Follow task completion** requirements
5. **Add proper error handling**

### Implementing API Endpoints
1. **Use API layer patterns** from `network/api-layer.mdc`
2. **Follow security guidelines** for authentication
3. **Implement proper error handling**
4. **Add TypeScript types**
5. **Test thoroughly**

### Adding Authentication
1. **Follow security rules** strictly
2. **Use secure storage** (Keychain/Keystore)
3. **Implement proper validation**
4. **Add biometric authentication** if available
5. **Handle all error scenarios**

## 🔍 Troubleshooting

### Common Issues

#### Rule Not Applying
- Check glob patterns in rule metadata
- Verify file is not in exclude_patterns
- Ensure rule is enabled (alwaysApply or applyWhen)

#### Security Warnings
- Review security.mdc for specific requirements
- Check authentication implementation
- Verify data encryption
- Validate input sanitization

#### Navigation Issues
- Check navigation/README.md for troubleshooting
- Verify navigation configuration
- Review auth navigation patterns

#### API Problems
- Follow api-layer.mdc patterns
- Check HTTP client configuration
- Verify error handling
- Test with different environments

### Getting Help
1. **Check this README** for general guidance
2. **Review specific rule files** for detailed information
3. **Check troubleshooting guides** in navigation/
4. **Follow security checklists** in security.mdc

## 📈 Best Practices

### Development Workflow
1. **Start with global standards** to understand project structure
2. **Implement security first** for all new features
3. **Follow navigation patterns** for consistent UX
4. **Use API layer patterns** for data management
5. **Apply UI standards** for consistent design
6. **Complete tasks fully** using enforcement rules

### Code Review
1. **Check against security rules** for vulnerabilities
2. **Verify task completion** requirements
3. **Review navigation patterns** for consistency
4. **Validate API implementations** against patterns
5. **Check UI compliance** with design system

### Maintenance
1. **Regular security audits** using security.mdc
2. **Update dependencies** and check for vulnerabilities
3. **Review and update** rule configurations
4. **Test all patterns** after updates
5. **Document changes** and new patterns

## 🔄 Updates and Maintenance

### Rule Updates
- **Security rules**: Update monthly or when new threats emerge
- **Navigation patterns**: Update when React Navigation releases new features
- **API patterns**: Update when HTTP client libraries change
- **UI standards**: Update when design system evolves

### Version Control
- **Track rule changes** in git
- **Document breaking changes** in rule files
- **Test rule updates** before deployment
- **Maintain backward compatibility** when possible

## 📞 Support

### Documentation
- **This README**: General guidance and overview
- **Individual rule files**: Detailed specifications
- **Code examples**: Real-world implementation patterns
- **Checklists**: Step-by-step implementation guides

### Community
- **React Native community**: For platform-specific questions
- **Cursor community**: For AI-assisted development
- **Security community**: For security best practices
- **Navigation community**: For React Navigation support

---

## 🎯 Quick Reference

| Rule Category | Priority | Always Apply | Key Focus |
|---------------|----------|--------------|-----------|
| Security | HIGH | False | Authentication, data protection, input validation |
| Task Completion | HIGH | True | Complete, functional implementations |
| Global Standards | MEDIUM | False | Project structure, coding conventions |
| Navigation | MEDIUM | False | Consistent navigation patterns |
| API Layer | MEDIUM | False | Type-safe, secure API implementation |
| Database | MEDIUM | False | Offline-first data management |
| UI Design | LOW | False | Consistent design system |
| Unit Testing | HIGH | False | Component, hook, and utility testing |
| UI Testing | HIGH | False | E2E, accessibility, and visual testing |

---

**Last Updated**: December 2024  
**Version**: 1.0.0  
**Compatibility**: React Native 0.80+, TypeScript 5.0+  
**Cursor Version**: Latest 