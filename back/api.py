import re
import tweepy as tw
from config import config

client = tw.Client(config.get("BEARER_TOKEN"))

urlRegex = re.compile("(?P<url>https?://[^\s]+)")


def make_search(term, count=5):
    print(extract_keyword(term))
    term = f"{extract_keyword(term)} has:links"
    response = client.search_recent_tweets(query=term, max_results=100)
    tweets = response.data
    result = []
    if tweets:
        for tweet in tweets:
            link = url_extractor(tweet.text)
            if link:
                result.append(link)

    return {"result": result}


def url_extractor(text):
    match = urlRegex.search(text)
    if match:
        return match.group("url")

    return


# Keyword extractor
import nltk

stop_words = set(nltk.corpus.stopwords.words("english"))


def rank_words(text: str):
    text = re.sub(r"[^\w]", " ", text)
    total_words = text.split()

    rank = dict()
    for word in total_words:
        if word not in stop_words:
            rank[word] = rank.get(word, 0) + 1

    return rank


def extract_keyword(text: str):
    word_dic = rank_words(text)
    sort_words = dict(sorted(word_dic.items(), key=lambda x: x[1], reverse=True)[:3])
    return " OR ".join(list(sort_words.keys()))
