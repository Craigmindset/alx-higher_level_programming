!/usr/bin/node
import requests

def get_movie_title(episode_number):
    url = "https://swapi-api.alx-tools.com/api/films/{}".format(episode_number)
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data["title"]
    else:
        return None

if __name__ == "__main__":
    episode_number = int(input("Enter the episode number: "))
    title = get_movie_title(episode_number)
    if title:
        print(title)
    else:
        print("No movie found for episode number {}.".format(episode_number))

