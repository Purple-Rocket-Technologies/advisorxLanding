
import requests
import sys
from datetime import datetime

class AdvisorXTester:
    def __init__(self, base_url="http://localhost:3002"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, expected_status=200):
        """Run a single test to check if the page is accessible"""
        url = self.base_url
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            response = requests.get(url)
            success = response.status_code == expected_status
            
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                return True, response.text
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                return False, None

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, None

    def check_content(self, html_content, search_term):
        """Check if the HTML content contains a specific term"""
        self.tests_run += 1
        print(f"\n🔍 Checking for '{search_term}'...")
        
        if search_term in html_content:
            self.tests_passed += 1
            print(f"✅ Found '{search_term}' in the page content")
            return True
        else:
            print(f"❌ Could not find '{search_term}' in the page content")
            return False

def main():
    # Setup
    tester = AdvisorXTester("http://localhost:3002")
    
    # Test 1: Check if the landing page is accessible
    success, html_content = tester.run_test("Landing Page Access")
    if not success:
        print("❌ Landing page is not accessible, stopping tests")
        return 1
    
    # Test 2: Check for the pricing plans
    tester.check_content(html_content, "$0")
    tester.check_content(html_content, "$299.99")
    tester.check_content(html_content, "$2,499")
    tester.check_content(html_content, "Most Popular")
    
    # Test 3: Check for "Sign Up" button (should not be present)
    sign_up_present = tester.check_content(html_content, "Sign Up")
    if sign_up_present:
        print("❌ 'Sign Up' button is still present, but should have been replaced")
    
    # Test 4: Check for "Schedule Demo" and "Contact Sales" buttons
    tester.check_content(html_content, "Schedule Demo")
    tester.check_content(html_content, "Contact Sales")
    
    # Test 5: Check for profession cycling animation
    tester.check_content(html_content, "Financial Advisors")
    
    # Print results
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())
