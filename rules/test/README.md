# React Native Testing Rules

## Overview
This directory contains comprehensive testing rules for React Native applications. The rules are designed to be **modular and focused**, allowing you to use them independently for specific testing needs or in combination for comprehensive coverage.

## Rule Structure

### 🎯 **Focused Testing Rules**
Each rule is designed for a specific testing domain:

- **[UI Testing Rule](ui-testing.mdc)** - Component rendering, user interactions, accessibility, and visual testing
- **[Unit Testing Rule](unit-testing.mdc)** - Business logic, utility functions, state management, and pure functions
- **[API Testing Rule](api-testing.mdc)** - HTTP client, service layer, API hooks, and network integration
- **[Database Testing Rule](database-testing.mdc)** - Local database operations, data persistence, sync management, and offline functionality
- **[Integration Testing Rule](integration-testing.mdc)** - End-to-end user flows, cross-component integration, and system-wide testing

### 🔄 **Comprehensive Testing Rule**
- **[Comprehensive Testing Rule](comprehensive-react-native-testing.mdc)** - Unified rule covering all testing domains (use when you need everything)

## How to Use These Rules

### **Option 1: Use Focused Rules (Recommended)**
Choose the specific rule that matches your testing needs:

#### **For UI Testing Only:**
```
Generate UI tests for the UserProfileScreen following the UI testing rule. Test component rendering, user interactions, accessibility, and visual styling.
```

#### **For Unit Testing Only:**
```
Generate unit tests for the calculateTotal utility function following the unit testing rule. Test business logic, edge cases, and error handling.
```

#### **For API Testing Only:**
```
Generate API tests for the UserService following the API testing rule. Test HTTP methods, error handling, and data transformation.
```

#### **For Database Testing Only:**
```
Generate database tests for the UserDatabaseService following the database testing rule. Test CRUD operations, transactions, and sync management.
```

#### **For Integration Testing Only:**
```
Generate integration tests for the user registration flow following the integration testing rule. Test the complete user journey from registration to profile setup.
```

### **Option 2: Use Multiple Focused Rules**
Combine rules for comprehensive coverage:

```
Generate comprehensive tests for the UserProfileScreen following:
1. UI testing rule for component rendering and interactions
2. Unit testing rule for business logic
3. API testing rule for service integration
4. Database testing rule for local storage
5. Integration testing rule for end-to-end flow
```

### **Option 3: Use Comprehensive Rule**
When you need everything in one go:

```
Generate comprehensive tests for the UserProfileScreen following the comprehensive React Native testing rule. Include UI testing, unit testing, API layer testing, database layer testing, and integration testing.
```

## Rule-Specific Prompts

### **UI Testing Prompts**

#### **For Components:**
```
Generate UI tests for the Button component following the UI testing rule. Test rendering, user interactions, accessibility, and visual styling with different props and states.
```

#### **For Screens:**
```
Generate UI tests for the LoginScreen following the UI testing rule. Test form rendering, user input handling, validation display, and accessibility compliance.
```

#### **For Forms:**
```
Generate UI tests for the RegistrationForm following the UI testing rule. Test form field rendering, input validation, error display, and submission handling.
```

### **Unit Testing Prompts**

#### **For Utility Functions:**
```
Generate unit tests for the formatCurrency utility function following the unit testing rule. Test different currency formats, edge cases, and error handling.
```

#### **For Custom Hooks:**
```
Generate unit tests for the useCounter custom hook following the unit testing rule. Test state management, increment/decrement logic, and edge cases.
```

#### **For Business Logic:**
```
Generate unit tests for the calculateOrderTotal function following the unit testing rule. Test price calculations, discounts, taxes, and validation logic.
```

### **API Testing Prompts**

#### **For Services:**
```
Generate API tests for the ProductService following the API testing rule. Test all CRUD operations, error handling, and data transformation.
```

#### **For Hooks:**
```
Generate API tests for the useProducts hook following the API testing rule. Test data fetching, loading states, error handling, and cache management.
```

#### **For HTTP Client:**
```
Generate API tests for the ApiClient following the API testing rule. Test request configuration, response handling, authentication, and error scenarios.
```

### **Database Testing Prompts**

#### **For Database Services:**
```
Generate database tests for the UserDatabaseService following the database testing rule. Test CRUD operations, transactions, and data integrity.
```

#### **For Sync Management:**
```
Generate database tests for the SyncManager following the database testing rule. Test online/offline sync, conflict resolution, and queue management.
```

#### **For Offline Functionality:**
```
Generate database tests for offline operations following the database testing rule. Test data caching, queue management, and reconnection handling.
```

### **Integration Testing Prompts**

#### **For User Flows:**
```
Generate integration tests for the complete user onboarding flow following the integration testing rule. Test registration, profile setup, and initial app configuration.
```

#### **For Cross-Component Integration:**
```
Generate integration tests for the search and filter functionality following the integration testing rule. Test component communication and data flow.
```

#### **For System Integration:**
```
Generate integration tests for the authentication system following the integration testing rule. Test login, token management, and protected routes.
```

## Benefits of Segregated Rules

### **🎯 Precision**
- **Targeted Testing**: Each rule focuses on a specific testing domain
- **Reduced Noise**: No unnecessary test patterns for your specific needs
- **Faster Generation**: Smaller, focused rules generate tests more quickly

### **🔧 Flexibility**
- **Mix and Match**: Combine rules based on your specific requirements
- **Incremental Testing**: Start with one rule and add others as needed
- **Project-Specific**: Use only the rules relevant to your project

### **📚 Maintainability**
- **Easier Updates**: Update specific testing patterns without affecting others
- **Clear Documentation**: Each rule has focused documentation and examples
- **Better Organization**: Logical separation of testing concerns

### **⚡ Efficiency**
- **Faster Prompts**: Shorter, more specific prompts for focused rules
- **Better Results**: More accurate test generation for specific domains
- **Reduced Complexity**: Simpler rule application and understanding

## Example Usage Scenarios

### **Scenario 1: New Component Development**
```
Generate UI tests for the new ProductCard component following the UI testing rule. Test rendering with different product data, user interactions, and accessibility.
```

### **Scenario 2: API Service Development**
```
Generate API tests for the new PaymentService following the API testing rule. Test payment processing, error handling, and transaction management.
```

### **Scenario 3: Database Layer Development**
```
Generate database tests for the new OrderDatabaseService following the database testing rule. Test order storage, retrieval, and sync operations.
```

### **Scenario 4: End-to-End Feature**
```
Generate integration tests for the complete checkout flow following the integration testing rule. Test the entire user journey from cart to order confirmation.
```

### **Scenario 5: Complex Feature with Multiple Layers**
```
Generate comprehensive tests for the user profile management feature following:
1. UI testing rule for profile editing interface
2. Unit testing rule for validation logic
3. API testing rule for profile update service
4. Database testing rule for local profile storage
5. Integration testing rule for complete profile management flow
```

## Quality Standards

### **Coverage Requirements**
- **UI Testing**: 90% line coverage for UI-related code
- **Unit Testing**: 95% line coverage for business logic
- **API Testing**: 90% line coverage for service functions
- **Database Testing**: 90% line coverage for database operations
- **Integration Testing**: 80% line coverage for user flows

### **Performance Requirements**
- **UI Tests**: < 50ms render time for simple components
- **Unit Tests**: < 10ms execution time for simple functions
- **API Tests**: < 5 seconds for API operations
- **Database Tests**: < 100ms for simple queries
- **Integration Tests**: < 30 seconds for complete flows

## Best Practices

### **DO's**
- **Choose the right rule** for your specific testing needs
- **Combine rules** when you need comprehensive coverage
- **Use focused prompts** for better test generation
- **Follow rule-specific patterns** for consistent testing
- **Test one domain at a time** for better organization

### **DON'Ts**
- **Don't use comprehensive rule** when you only need UI testing
- **Don't mix testing domains** in a single test file
- **Don't ignore rule-specific requirements** and patterns
- **Don't skip quality standards** defined in each rule

## Integration with Project Configuration

All rules integrate with your project configuration:
- **File Structure**: Follows `config.fileStructure` definitions
- **Architecture**: Uses `config.architecture` choices
- **Design System**: References `config.design` tokens
- **API Configuration**: Uses `config.api` settings
- **Database Configuration**: Uses `config.localDB` settings

## Getting Started

1. **Identify your testing needs** (UI, Unit, API, Database, Integration)
2. **Choose the appropriate rule(s)** from the focused options
3. **Use the rule-specific prompts** for targeted test generation
4. **Follow the quality standards** defined in each rule
5. **Combine rules as needed** for comprehensive coverage

This modular approach ensures you get exactly the testing coverage you need without unnecessary complexity! 