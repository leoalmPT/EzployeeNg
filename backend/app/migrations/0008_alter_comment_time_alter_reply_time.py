# Generated by Django 4.1.3 on 2022-12-30 14:37

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_alter_comment_time_alter_reply_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='time',
            field=models.TimeField(auto_now=datetime.datetime(2022, 12, 30, 14, 37, 35, 698220)),
        ),
        migrations.AlterField(
            model_name='reply',
            name='time',
            field=models.TimeField(auto_now=datetime.datetime(2022, 12, 30, 14, 37, 35, 698567)),
        ),
    ]