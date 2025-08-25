# API Layer

Generated according to rules/network/api-layer.mdc and project coding standards, driven by config/project-config-sample.json.

Structure
- clients/ApiClient.ts – Axios client with interceptors, retry, and runtime base URL override
- constants/ – Shared constants and path builders
- models/ – Resource models from config.dataModels
- endpoints/ – Typed functions per API resource
- services/ – Resource-centric business logic
- hooks/ – Lightweight React hooks to consume services
- utils/ – Config reader and helper utilities
- index.ts – Barrel exports

Usage

import { createPetService, usePetsByStatus, setApiBaseUrl } from 'src/api';

// Optionally override base URL at runtime (e.g., per env)
setApiBaseUrl('https://petstore.swagger.io/v2');

const petService = createPetService();
const pets = await petService.listByStatus('available');

Notes
- Base URL is sourced from config via utils/ProjectConfig or overridden at runtime.
- Endpoints are centralized in constants/ApiPaths to avoid string duplication.
- Functions are typed and under 50 lines, with single responsibility.

