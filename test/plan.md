# Test plan for the Registration building block.

1. All `examples` must be runnable via `docker compose up`.

2. Tests in `/test` will include the expected HTTP status codes for the 1
   current statistics endpoint.

3. **L1&L2** Via a basic SSH script (maybe github actions? maybe a circleCI config?)
   we will recurse through the `examples` directory, run `docker compose up` for
   each example, wait until we get a running set of containers, and then execute
   the 5 api endpoint tests for _that_ example.

The output will be a ✅ or ❌ for _each_ example, for the single API test.

4. **L3** - Each application will be required to be configured with a canonical eservice.
  It's on _that_ application developer to show us how to configure that candidate app
  should be configured (via these example scripts) and then build accessibility-tag-based
  browser tests that determine whether the canonical e-service has been successfully created.

## Levels of Tests

1. ensure that application can be launched via docker with a adaptor and a security server
2. check that all defined API endpoints in the openAPI-spec.yaml return proper response codes
3. check browser-test compliance for the canonical e-service
