import requests
import unittest
import sys

class AdvisorXAPITests(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(AdvisorXAPITests, self).__init__(*args, **kwargs)
        self.base_url = "http://localhost:3000"
        
    def test_logos_api(self):
        """Test the logos API endpoint"""
        print("\n🔍 Testing logos API...")
        
        try:
            response = requests.get(f"{self.base_url}/api/logos")
            
            # Check if the request was successful
            self.assertEqual(response.status_code, 200, f"Expected status code 200, got {response.status_code}")
            print("✅ Status code: 200")
            
            # Check if the response is JSON
            content_type = response.headers.get('Content-Type', '')
            self.assertTrue('application/json' in content_type, f"Expected Content-Type to include 'application/json', got '{content_type}'")
            print("✅ Content-Type: application/json")
            
            # Check if the response contains the logos array
            data = response.json()
            self.assertIn('logos', data, "Response should contain 'logos' key")
            print("✅ Response contains 'logos' key")
            
            # Check if logos is an array
            self.assertIsInstance(data['logos'], list, "logos should be an array")
            print(f"✅ logos is an array with {len(data['logos'])} items")
            
            # Print the logos found
            print(f"📋 Logos found: {', '.join(data['logos'])}")
            
        except requests.RequestException as e:
            self.fail(f"Request failed: {str(e)}")
        except Exception as e:
            self.fail(f"Test failed: {str(e)}")

def run_tests():
    # Create a test suite
    suite = unittest.TestSuite()
    suite.addTest(AdvisorXAPITests('test_logos_api'))
    
    # Run the tests
    runner = unittest.TextTestRunner(verbosity=2)
    result = runner.run(suite)
    
    # Return appropriate exit code
    return 0 if result.wasSuccessful() else 1

if __name__ == "__main__":
    sys.exit(run_tests())
