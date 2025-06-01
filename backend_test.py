
import requests
import json
import sys
from datetime import datetime

class AdvisorXAPITester:
    def __init__(self, base_url="http://localhost:3000"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, expected_content=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers)
            elif method == 'POST':
                response = requests.post(url, headers=headers)

            status_success = response.status_code == expected_status
            
            if status_success:
                print(f"✅ Status check passed - Expected: {expected_status}, Got: {response.status_code}")
            else:
                print(f"❌ Status check failed - Expected: {expected_status}, Got: {response.status_code}")
                return False
            
            # If we have expected content to check
            if expected_content:
                try:
                    response_json = response.json()
                    content_success = True
                    
                    for key, value in expected_content.items():
                        if key not in response_json:
                            print(f"❌ Content check failed - Missing key: {key}")
                            content_success = False
                        elif isinstance(value, list) and not isinstance(response_json[key], list):
                            print(f"❌ Content check failed - Expected list for key: {key}")
                            content_success = False
                        elif isinstance(value, list) and len(response_json[key]) == 0:
                            print(f"❌ Content check failed - Empty list for key: {key}")
                            content_success = False
                    
                    if content_success:
                        print(f"✅ Content check passed")
                        self.tests_passed += 1
                        return True
                    return False
                    
                except json.JSONDecodeError:
                    print(f"❌ Content check failed - Invalid JSON response")
                    return False
            else:
                self.tests_passed += 1
                return True

        except Exception as e:
            print(f"❌ Test failed - Error: {str(e)}")
            return False

    def test_logos_api(self):
        """Test the logos API endpoint"""
        return self.run_test(
            "Logos API",
            "GET",
            "api/logos",
            200,
            expected_content={"logos": []}
        )

def main():
    # Setup
    tester = AdvisorXAPITester("http://localhost:3000")
    
    # Run tests
    logos_test = tester.test_logos_api()
    
    # Print results
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    # Return success if all tests passed
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())
