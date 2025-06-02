
import requests
import time
import sys
from datetime import datetime

class AdvisorXTester:
    def __init__(self, base_url="http://localhost:3000"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status=200, expected_content_type=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url)
            else:
                raise ValueError(f"Unsupported method: {method}")

            success = response.status_code == expected_status
            
            # Check content type if specified
            content_type_success = True
            if expected_content_type and 'Content-Type' in response.headers:
                content_type_success = expected_content_type in response.headers['Content-Type']
                if not content_type_success:
                    print(f"❌ Content-Type mismatch - Expected: {expected_content_type}, got: {response.headers['Content-Type']}")
            
            success = success and content_type_success
            
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                if expected_content_type:
                    print(f"✅ Content-Type: {response.headers.get('Content-Type', 'Not provided')}")
            else:
                print(f"❌ Failed - Expected status {expected_status}, got {response.status_code}")

            return success, response
        
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, None

    def test_logo_api(self):
        """Test the logo API endpoints"""
        # Test white logo API
        success, response = self.run_test(
            "White Logo API",
            "GET",
            "api/logo",
            200,
            "image/svg+xml"
        )
        
        if success:
            # Verify it contains white fill
            if 'fill="#ffffff"' in response.text:
                print("✅ Logo contains white fill as expected")
            else:
                print("❌ Logo does not contain white fill")
                success = False
        
        # Test dark logo API
        dark_success, dark_response = self.run_test(
            "Dark Logo API",
            "GET",
            "api/logo-dark",
            200,
            "image/svg+xml"
        )
        
        if dark_success:
            # Verify it contains dark fill
            if 'fill="#1f2937"' in dark_response.text:
                print("✅ Logo contains dark fill as expected")
            else:
                print("❌ Logo does not contain dark fill")
                dark_success = False
        
        return success and dark_success

def main():
    # Get the backend URL from environment or use default
    tester = AdvisorXTester("http://localhost:3000")
    
    # Run logo API tests
    logo_success = tester.test_logo_api()
    
    # Print results
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    if logo_success:
        print("✅ Logo API tests passed successfully")
    else:
        print("❌ Some logo API tests failed")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())
