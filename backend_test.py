
import requests
import sys
import re
from datetime import datetime

class AdvisorXAPITester:
    def __init__(self, base_url="http://localhost:3000"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status=200, expected_content_type=None, expected_content=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url)
            elif method == 'POST':
                response = requests.post(url)
            
            # Check status code
            status_success = response.status_code == expected_status
            if status_success:
                print(f"✅ Status code: {response.status_code}")
            else:
                print(f"❌ Status code: Expected {expected_status}, got {response.status_code}")
                return False
            
            # Check content type if specified
            if expected_content_type:
                content_type = response.headers.get('Content-Type', '')
                content_type_success = expected_content_type in content_type
                if content_type_success:
                    print(f"✅ Content-Type: {content_type}")
                else:
                    print(f"❌ Content-Type: Expected {expected_content_type}, got {content_type}")
                    return False
            
            # Check content if specified
            if expected_content:
                content_success = expected_content in response.text
                if content_success:
                    print(f"✅ Content contains expected pattern")
                else:
                    print(f"❌ Content does not contain expected pattern")
                    return False
            
            self.tests_passed += 1
            return True

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False

    def test_logo_api(self):
        """Test the logo API endpoints"""
        # Test white logo endpoint
        white_logo_success = self.run_test(
            "White Logo API",
            "GET",
            "api/logo",
            expected_status=200,
            expected_content_type="image/svg+xml",
            expected_content='fill="#ffffff"'
        )
        
        # Test dark logo endpoint
        dark_logo_success = self.run_test(
            "Dark Logo API",
            "GET",
            "api/logo-dark",
            expected_status=200,
            expected_content_type="image/svg+xml",
            expected_content='fill="#1f2937"'
        )
        
        return white_logo_success and dark_logo_success

def main():
    # Setup
    tester = AdvisorXAPITester("http://localhost:3000")
    
    # Run tests
    logo_tests_passed = tester.test_logo_api()
    
    # Print results
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    if logo_tests_passed:
        print("\n✅ Logo API tests passed successfully!")
    else:
        print("\n❌ Some logo API tests failed.")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())
